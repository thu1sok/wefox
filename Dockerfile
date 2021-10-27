FROM nginx:latest
LABEL maintainer="Adrian Garcia"
ENV PORT=80

WORKDIR /usr/share/nginx/html
COPY ./dist/wefox/ .
EXPOSE ${PORT}