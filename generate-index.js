// Создает в rootDir файл index.ts, который экспортирует все папки из каталога. Имена экспортов идут с большой буквы.

import fs from "fs";
import path from "path";

const rootDir = "./build/native";
const indexFilePath = path.join(rootDir, "index.ts");

const directories = fs
  .readdirSync(rootDir)
  .filter(
    (dir) =>
      fs.statSync(path.join(rootDir, dir)).isDirectory() &&
      dir !== "node_modules"
  );

const indexContent = directories
  .map((directory) => {
    return `export { ${capitalizeFirstLetter(
      directory
    )} } from './${directory}';`;
  })
  .join("\n");

fs.writeFileSync(indexFilePath, indexContent);

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
