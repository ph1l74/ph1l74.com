FROM nginx:latest

# Expost port 80
EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist /var/www/html

# Start up nginx server
CMD ["nginx", "-g", "daemon off;"]