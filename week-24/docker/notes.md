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


## How do we containerize an application or say node.js application
- 
