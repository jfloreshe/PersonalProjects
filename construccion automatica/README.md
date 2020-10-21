# HERRAMIENTA
La herramienta que se está usando es node.js con npm.
npm nos permite instalar todos los modulos que estamos usando en nuestra app como se ve en el archivo package.json en dependencias podemos colocar más modulos si deseamos.
## INSTALACIÓN DE NODE.JS Y NPM
Para poder usar npm necesitamos node.js

En sistemas Linux podemos instalar node version manager(NVM) usando el siguiente comando en nuestra consola
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Al finalizar tendremos una salida similar a esta
```
% Total % Received % Xferd Average Speed Time Time Time Current
 Dload Upload Total Spent Left Speed
100 12818 100 12818 0 0 11566 0 0:00:01 0:00:01 --:--:-- 11579
=> Downloading nvm as script to '/home/ostechnix/.nvm'

=> Appending nvm source string to /home/ostechnix/.bashrc
=> Appending bash_completion source string to /home/ostechnix/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```
Una vez tengamos instalado NVM podemos instalar la versión que deseemos de node usando el siguiente comando
```
nvm install node [version]
```
Cuando instalamos node se instala automáticamente npm
## CONSTRUCCIÓN DEL PROYECTO
Para construir nuestro proyecto en este caso instalar dependencias con npm solo vamos al directorio que contiene nuestro archivo package.js y colocamos el siguiente comando
```
npm install
```
Con esto tendremos las dependencias listas para ser usadas.


