#STAGE 0 COMPILE ON NODEJS
FROM node:16 as node

#Define working dir inside the container
WORKDIR /app

#Copy app into container
COPY ./src/ /app/src/
COPY *.json /app/
COPY *.lock /app/

#Install dependencies in container
RUN yarn 

# Start the application
#RUN yarn start
CMD [ "yarn", "start" ]