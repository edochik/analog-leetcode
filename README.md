## Описание проекта

Данный проект разработан на React с помощью Vite.
Приложение реализует простой аналог leetcode.
Представлено три окна:

1. Описание задачи;
2. Окно исполнения кода с выбором языка python или go;
3. Окно результата;

После того как код напечатан можно запустить, нажав кнопку Run, запрос уйдет на сервер glitch
Решение правильное выведет 'Hello world'
Решение неправильное выведет 'SyntaxError: Unexpected token'

Правильное решение для python:

```python
def hello():
    print("Hello, world!")

hello()

```

Правильное решение для go:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```

## Инструкция по запуску и развертыванию проекта


## Инструкция по серверу

Используется сервер glitch
[Glitch](https://glitch.com/edit/#!/testing-mycode?path=server.js%3A32%3A32);
Логика работы сервера:

1. Осуществляется проверка на язык.
2. Код проверяется:
- python, code.includes('print("Hello, world!")');
- go, code.includes('fmt.Println("Hello, world!")')
если данные строки присутствуют в проекте, будет выведено "Hello, world!"
