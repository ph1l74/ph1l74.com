FROM node:alpine 
RUN npm install pm2 -g
CMD ["pm2-runtime", "app.js"]