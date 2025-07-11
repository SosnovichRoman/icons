// Создает в rootDir файл index.ts, который экспортирует все папки из указанного каталога. Имена экспортов идут с большой буквы.
// Пример вызова: node generate-index.js PATH_TO_DIRECTORY

import fs from "fs";
import path from "path";

const rootDir = process.argv[2];
if (!rootDir) throw new Error("Root directory parameter not specified");
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
