# Icons
## Установка

Для установки библиотеки в качестве зависимости можно использовать команду: 

```sh
npm install https://github.com/SosnovichRoman/icons.git
```

## Структура проекта
### Основные папки

+ .storybook - файлы конфигурации storybook
+ native - точка входа в библиотеку для иконок react native
+ web - точка входа в библиотеку для иконок react
+ src - каталог, в котором хранятся исходные svg файлы иконок

### Генерируемые папки
+ build - папка, в которой создаются tsx файлы иконок для native и web
+ stories - папка, в которой генерируются файлы историй для storybook

### Исполняемые файлы
+ generate-index.js - создает в указанной папке файла index.ts, который будет экспортировать все каталоги из указанной директории
+ generate-index.js - создает в папке stories папку с историями для компонентов из папки build. В качестве аргумента принимает название подкаталога (web, native)

### Конфигурационные файлы
+ rollup.config.(native/web).js - файлы конфигурации rollup
+ tsconfig.rollup-(native/web).json - файлы конфигурации typescript, используются при упаковке библиотеки с помощью rollup
+ svgr.config.(native/web).json - файлы конфигурации svgr
+ svgr.d.ts - используется для исправления ошибок typescript при импорте svg

## Руководство по использованию
### Генерация библиотеки

1. Добавьте необходимые иконки в папку src/icons. Каждую иконку добавьте в отдельную папку. Импортируйте все иконки в файл index.ts в папке icons и экспортируйте в виде объекта { Icon1, Icon2... }.
2. Для генерации библиотеки выполните команду в корне проекта:

```sh
npm run build
```

Данная команда выполняет две аналогичные команды: ``` npm run build:native ``` и ``` npm run build:web ```, каждая из которых выполняет следующие действия:
+ Генерирует папку build/(web/native), в которой помещаются сконвертированные tsx файлы.
+ Создает index.ts файл, который экспортирует созданные файлы
+ Транспилирует typescript и создает точку входа в библиотеку (native/build)

3. Обновите версию библиотеки в ```package.json``` и сделайте коммит на github.

### Stotybook

> **Примечание**: Перед запуском storybook необходимо сгенерировать файлы библиотеки, как описано выше.

Для запуска storybook выполните команду в корне проекта:

```sh
npm run storybook
```
Данная команда генерирует истории storybook в папку stories и запускает сервер storybook.




