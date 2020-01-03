FROM nginx:1.16.1
RUN apt-get update
RUN apt-get install -y npm
RUN npm install -y node
WORKDIR /usr/share/nginx/html
RUN npm install
COPY .docker/nginx-config/default.conf /etc/nginx/conf.d 
CMD ["npm", "run", "start"]

