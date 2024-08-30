#image node
FROM node:22.7




#pointage vers mon dossier virtuel /app  crée par WORKDIR
WORKDIR /app


#je copie tous les fichiers qui commencent par package à la  racine du dossier app de docker c'est à dire /app
COPY package*.json ./



#Je copie tout ce qui est là ou je suis dans mon dossier racine docker c'est à dire app
COPY . .











#tu écoute le port 3000
EXPOSE 3000 

CMD [ "npm", "start", "run","dev" ]



