FROM nginx:alpine
LABEL authors="bia"
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
