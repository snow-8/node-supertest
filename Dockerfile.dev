# FETCH BASE IMAGE
FROM node:17-alpine3.12

# CREATE A NEW USER NAMED NODE
USER node

# CREATE A DIR NAMED APP UNDER USER NAMED NODE
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# COPY FILES AND INSTALL REQUIREMENTS
COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node ./ ./

# COMMANDS
CMD ["npm", "run", "test"]