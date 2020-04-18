FROM python:3.7

ARG REQUIREMENTS

WORKDIR /code/

RUN apt update

COPY requirements/requirements-prod.txt /code/requirements/
COPY requirements/requirements-dev.txt /code/requirements/
COPY ${REQUIREMENTS} /code/requirements/

COPY .env /code/

RUN pip3 install --upgrade pip && pip3 install -r ${REQUIREMENTS}

COPY . /code/
