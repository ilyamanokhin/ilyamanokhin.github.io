Для создания проекта нужно:

Склонировать репозиторий
Отпачковаться от project-template
Создать ветка project-<name project>

Для запуска проекта нужно:

Перейти в корень проекта где лежит package.json и  gulpfile.js
Ввести следующие команды 
npm i 
gulp watch для запуска проекта 

gulp watch смотрит за изменением less файлов и сохраняет в build/css 
gulp watch смотрит за изменением build/css и компилирует в all.css, который потом можно сжать 
gulp watch смотрит за изменением js файлами и компилирует их в build/js all.js  который потом можно сжать 
gulp watch смотрит за изменением html файлами и сразу изменяет его

If error refusing to merge unrelated histories
then add comand 
--allow-unrelated-histories

EX.
git merge origin/project-decoreto --allow-unrelated-histories

TODO настроить gulp file