FROM nginx:1.15

COPY /dist/out/ /usr/share/nginx/html

COPY /dev/nginx.conf /etc/nginx/conf.d/default.conf