// Создает в stories папку с историями для компонентов из папки build. В качестве аргумента принимает название подкаталога (web, native)
// Пример вызова: node generate-web-stories.js SUB_DIR

import fs from "fs";
import path from "path";

const subDir = process.argv[2]; // подкаталог
const componentsDir = `./build/${subDir}`; // целевой каталог с компонентами
const storiesDir = `./stories/${subDir}`; // целевой каталог для историй

// создаем каталог для историй, если его нет
if (!fs.existsSync(storiesDir)) {
  fs.mkdirSync(storiesDir, { recursive: true });
}

// читаем каталог с компонентами
fs.readdirSync(componentsDir).forEach((componentDir) => {
  const componentPath = path.join(componentsDir, componentDir);
  const indexFile = path.join(componentPath, "index.ts");

  // проверяем, что index.ts существует
  if (fs.existsSync(indexFile)) {
    const componentName = capitalizeFirstLetter(componentDir);
    const storyDir = path.join(storiesDir, componentName);
    const storyFile = path.join(storyDir, "index.stories.ts");

    // создаем каталог для истории, если его нет
    if (!fs.existsSync(storyDir)) {
      fs.mkdirSync(storyDir);
    }

    const storyContent = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${componentName} } from "../../../${componentsDir}/${componentDir}";

const meta: Meta<typeof ${componentName}> = {
 title: "${subDir}/${componentName}",
 parameters: {
  layout: "centered",
 },
  component: ${componentName},
  tags: ["autodocs"],

  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
    viewBox: { control: "text" },
    preserveAspectRatio: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof ${componentName}>;;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;

    // записываем историю в файл
    fs.writeFileSync(storyFile, storyContent);
  }
});

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
