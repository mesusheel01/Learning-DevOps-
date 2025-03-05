## What is Docker?

- Docker is a tool that is used to contanerize our application for example running twoo fe and 1 be seperatelty through Docker.
- Docker provided installing and deleting images of an application like mongo database, pg db , python, node etc
- It provides facility to compose a docker compose file where you could seetup your porject and virtual machine like configuration that will run by docker, what i mean is docker will act like virutal machine and will install all the things that will redquiredd by your project and your project could run via single command.


## Images vs containers

- Image is a standalone execuatable package that includes everything neeeded to run a piece of software.
- Where containers is an instance of an image.

## Port mapping 

- Docker proivdes concept of port mapping where you can describe a port on which the certain image should run.
  eg- Like you run mongo with this command : 
            -- Docker run -p 5174:27017 mongo :- will run the mongo on mentioned port i.e.5173 and you could connect to that particular port.

## Some basic docker commands

- Docker run image_name
- Docker ps : check processes
- Docker kill process_id : to kill the process with certain id
- Docker remove image_name --force: to delete the image completely from local system.
- Docker exec -it process_id sh : in intractive mode now you are into docker machine like a virutal machine via terminal can run cd , ls etc;
- Docker build -t simple-node-app .: will install build the application in ./ folder and then use docker run to run the project


## How do we containerize an application

- We create a DockerFile for out application where we write all the necessary things that are required to run the our application it looks something like this:

        FROM node:20-alpine

        WORKDIR /app


        COPY . .

        RUN npm install

        COPY . .

        EXPOSE 3000

        CMD [ "node", "index.js" ]

## Layers in docker.

- Layers are the fundamental parts of a image architechture that allows docker to be faster and more portable.
- How laryes are made:
  --> Base layer :
  --> Instruction layer:
  --> Reusable and sharable: 
  --> Immutable:

# Networks and volumes

## Volumes

- If you restart a mongo docker container you will notice the data goes away. This is because docker containers are transitory(They dont retain data after restart).

- So here comes the concept of volumes which is used to store the data that has been stored in any container, and after restarting we mount the stored folder to the conatiner so it will conatin all the data.

- **docker volume create mongo_db_data** command creates volume of the data 
- now when we start our container we use this command :
  --> docker run -p 2782 -v mongo_db_data:/data/db mongo
  --> will start the mongo with previous data


## Networks in docker.

- In Docker, a netwokr is a powerful feature that allows conatiners to communicae with each other and with  the outside worls.
- Docker constianers can't talk to each other by default.
- localhost on a docker conatiner means it's own network and not the network of the host machine.

### How to make conatiners to talk to each other 

1. Clone the repo
2. Build th image : docker build -t image_tag.
3. Create a network: docker network create my_custom network
4. Start the backend process with the network attached to it: docker run -d -p 3000:3000 --name backend --network my_custom_network
5. STart mongo on the smae network: docker run -d -v volume_database:/data/db  --name mongo --network my_custom_network
6. Check the logs to ensure the db connection is successfull: docker log <container_id>

**docker network ls** gives the networks that are created in your docker.
















