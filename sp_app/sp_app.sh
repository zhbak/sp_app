#!/bin/bash
sleep 5s

alembic upgrade head

# Путь к CSV-файлу внутри контейнера
#csv_file="/data/DB_table_3.1.csv"

# Замените значения на ваши собственные
#conateiner_name=db_sp_app
#DB_PORT=2005
#DB_NAME=sp_131
#DB_USER=kirill_zhbakov

# Выполнение импорта данных из CSV-файла с использованием psql
#docker exec -it "$conateiner_name" psql -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -c "\\copy  Table_3_1FROM '$csv_file' WITH (FORMAT csv, HEADER true, DELIMITER ',');"

gunicorn main:app --workers 1 --worker-class uvicorn.workers.UvicornWorker --bind=0.0.0.0:8000