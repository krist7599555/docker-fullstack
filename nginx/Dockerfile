FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./favicon.ico /var/www/html/website
EXPOSE 80
EXPOSE 443

CMD [ "nginx", "-g", "daemon off;"]
