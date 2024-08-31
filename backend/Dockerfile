#FROM nginx:latest

#COPY ./default.conf /etc/nginx/conf.d/default.conf


#EXPOSE 4000


#image node
FROM node:22.7

#pointage vers mon dossier virtuel /server  crée par WORKDIR
WORKDIR /app

#je copie tous les fichiers qui commencent par package à la  racine du dossier app de docker c'est à dire /app/server
COPY package*.json ./

#installer node
# Installing dependencies.
RUN npm i -g nodemon
#Je copie tout ce qui est dans utopid dans mon dossier racine docker c'est à dire app

RUN npm i dotenv --save 


RUN npm i

COPY . .


#RUN npm install 

#les commandes utilisés dans package json et par default
CMD [ "npm", "start", "dev", "run"]

#tu écoute le port 3001
#EXPOSE 4000



# Use Nginx as the production server
#FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
#COPY --from=build /app/build /usr/share/nginx/html




# Expose port 80 for the Nginx server
#EXPOSE 80

# Start Nginx when the container runs
#CMD ["nginx", "-g", "daemon off;"]