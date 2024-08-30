/*

1- Créer le projet utopid 
on crée le dossier utopid on fait 
    cd utopid
on tape :     
    create-react-app .




 2 lancer l'application 
    npm start   






3 on va créer un dossier  qu'on va appeler server edans lequel se trouvera notre backend
    mkdir server
    cd server
    npm init -y
nb : -y est une commande linux qui veut dire "ne pas poser d'eventuel questions concernant la commande tapé"




5 - on installe express (un module backend node pour pour le js) et cors pour les requetes distants
    npm i express cors






Attention dans le gitignore de notre projet préciser que le dossier node_modules du dossier ne sera pris en compte par git

6 - creer le fichier server.js et configurer  voir (voir doc):





7 - installer nodemon qui permet de lancer le serveur autoamiquement en cas de changement au lieu de taper npm start tout le temps
    npm install -g nodemon 

puis dans le fichier package json vous pouvez remplacer l'exécutable nodemon server.js par dev par exemple :   "dev": "nodemon server.js"
on fait "npm run demarreServeur" est le serveur est lancé







8 - installer dotenv (variables d'environnement) QUI doivent dans des fichier .env)
EX: SERVER_PORT = 4000 dans .env et pour récupérer le variables ailleus : process.env.ERVER_PORT 

    npm install dotenv --save   //il sera installé localement avec --save

pour que les variables d'envirronement soient rpis en compte il faut excuté dotenv dés le lancement du serveur dans package.json ex: nodemon -r dotenv/config  server.js




9 installer react-dom pour la gestion es liens 

taper : 
npm install react-router-dom




10 - Exécutez l’une des commandes suivantes pour ajouter Material UI à votre projet :
npm install @mui/material @emotion/react @emotion/styled


11 - ES7+ React/Redux/React-Native snippets
permet de créer un bout de code rapidement avec un mot clé (snippets) ex :  
rfce :  permet de créer un componeent react  rapidement
rnce : permet de créer un componeent react-native  rapidement
rafc : permet de créer un componeent react-native de type fléché rapidement
imp : permet de faire la totalité d'un import  ex:  import second from 'first'
uses.. : pour useState
useE.. : pour effect
ect...

video pour en savoir plus
https://www.youtube.com/watch?v=1tBHgCHyi8A






12 - prettier 
//permet de formatter et d'organiser votre code
click droit sur le fichier -> "Format document with"
et choisir
video pour en savoir plus
https://www.youtube.com/watch?v=1tBHgCHyi8A






13 - installer une police 
handwriten



14 - installer npm install styled-components





15 - permet de débugger son application
npm install -g react-devtools

16 - Ouvrez ensuite les outils de développement depuis le terminal :
react-devtools





17  - installer styled pour le css
npm install @mui/material @emotion/react @emotion/styled



18 - installer les icones de material ui


*/







/* installation de docker 

une fois docker installé : 
19 - créer un  fichier .dockerignore pour dire à docker de prendre en compte node_modules et server/node_modules

 - créer DockerFile pour aller récupérer mes images et faire des configurations :
à l'intérieur du fichier  DockerFile :
/////////////////////////////////////////////////
#image node
FROM node:alpine

#pointage vers mon dossier virtuel /app  crée par WORKDIR
WORKDIR /app

#je copie tous les fichiers qui commencent par package à la  racine du dossier app de docker c'est à dire /app
COPY package*.json ./

#installer node
RUN npm install 
#Je copie tout ce qui est dans utopid dans mon dossier racine docker c'est à dire app
COPY . .

CMD [ "npm", "start" ]

#tu écoute le port 3000
EXPOSE 3000
//////////////////////////////////////////////



 - créer le fichier docker-compose.yaml
    c'est dans ce fichier qu'on éxécute les images qui vont devenir un container
    et c'est ici qu'on lance le serveur


*/