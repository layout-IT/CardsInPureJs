## Описание

Этот проект использует Webpack для сборки и управления зависимостями. Он поддерживает транспиляцию с Babel, обработку CSS и развертывание на GitHub Pages.

## Установка

-Убедитесь, что у вас установлен Node.js. Затем выполните команду:

npm install

## Скрипты

-Запуск локального сервера для разработки

npm start

-Сервер запустится на http://localhost:3000/.

## Сборка проекта

-Для разработки (без минификации):

npm run build:dev

-Для продакшена (с минификацией):

npm run build:prod

## Развертывание на GitHub Pages

npm run deploy

-Код проекта будет опубликован по адресу: https://github.com/layout-IT/CardsOnPureJs

## Зависимости

1. Webpack

2. Babel

3. CSS Loader

4. HTML Webpack Plugin

5. Mini CSS Extract Plugin

6. gh-pages