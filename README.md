Устанавливаем в vscode плагини eslint, prittier, stylelint

Для форматирования файла при нажатии клавиш alt + q откройте файл keybindings.json из командной Command Pallete shift+command+P (или в настройках хоткеев значок настроек ) и добавьте в массив следующие настройки:

    {
        "key": "alt+q",
        "command": "stylelint.executeAutofix",
        "when": "editorTextFocus && editorLangId == 'css'"
    },
    {
        "key": "alt+q",
        "command": "stylelint.executeAutofix",
        "when": "editorTextFocus && editorLangId == 'scss'"
    },
    {
        "key": "alt+q",
        "command": "stylelint.executeAutofix",
        "when": "editorTextFocus && editorLangId == 'less'"
    }
