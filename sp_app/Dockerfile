FROM python:3.9

RUN mkdir /fastapi_app

WORKDIR /fastapi_app

COPY requirements.txt .

RUN pip install -r requirements.txt
#RUN apt-get update && apt-get install -y postgresql-client

COPY . .

RUN chmod a+x sp_app.sh

#CMD gunicorn main:app --workers 1 --worker-class uvicorn.workers.UvicornWorker --bind=0.0.0.0:8000