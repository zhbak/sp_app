#!/bin/bash

container_name_db=db_sp_app
DB_PORT=2005
DB_NAME=sp_131
DB_USER=kirill_zhbakov

files=(
    "/data/DB_table_3.1.csv"
    "/data/DB_table_4.1.csv"
    "/data/DB_table_5.1.csv"
    "/data/DB_table_6.1.csv"
    "/data/DB_table_7.1.csv"
    "/data/DB_table_8.1.csv"
    "/data/DB_table_9.1.csv"
    "/data/DB_table_10_2.csv"
    "/data/DB_table_11_1_1.csv"
    "/data/DB_table_11_1_2.csv"
    "/data/DB_table_13_1.csv"
)

tables=(
    "table_3_1"
    "table_4_1"
    "table_5_1"
    "table_6_1"
    "table_7_1"
    "table_8_1"
    "table_9_1"
    "table_10_2"
    "table_11_1_1"
    "table_11_1_2"
    "table_13_1"
)

length=${#tables[@]}

for ((i=0; i<$length; i++))
do

    file=${files[$i]}
    table=${tables[$i]}

    echo "Importing data from $file in $table"
    docker exec -it "$container_name_db" psql -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -c "\\copy $table FROM '$file' WITH (FORMAT csv, HEADER true, DELIMITER ',');"

done


# Выполнение импорта данных из CSV-файла с использованием psql
#docker exec -it "$conateiner_name_db" psql -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -c "\\copy  Table_3_1 FROM '$file_path' WITH (FORMAT csv, HEADER true, DELIMITER ',');"
#docker exec -it db_sp_app psql -p 2005 -U kirill_zhbakov -d sp_131