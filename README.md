# seat-reservation-system

## Запуск 


### заполните файлы окружение по аналогии с example.env для соответствующего окружение (prod.env, dev.env, local.env)

```bash
./restart-dev.sh # dev mode (port - 7000) запуск на удаленном дев сервере
```

<br/>

```bash
./restart.sh # prod mode (port - 80)
```

<br/>

```bash
./restart-local.sh # local mode (port - должен быть прописан в файле окружении local.env) запуск на локальном компе
```

## Инструменты разработки

### Для облегчения работы с Nest (только в local режиме) в docker контейнере:

1) Перейдите в терминале в папку сервера:

```bash
cd server
```

2) Пропишете нужную команду для сервера:

```bash
./cli.sh your_command # например ./cli.sh nest g res user
```

### Чтобы попасть в админку в бд (только в local режиме):

1) зайдите на http://localhost:{порт, который указан в local.env}/dba/

2) заполните форму для создании соединении с бд в соотвествием с тем что указана в файле окружении (local.env), но где поле Server укажите bd (по названию сервиса в docker-compose.local.yml)

