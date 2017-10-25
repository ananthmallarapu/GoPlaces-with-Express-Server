DESCRIPTION
this repo is a implementation of angualar application with express server using mongoDB as database

required software:
cassandra
mongoDB
node.js
angular-cli
make sure the above pacakges are installed in your machine

COMMAND TO INSTALL DEPENDENCIES
1.navigate to ExpressAssignment directory 
2.run the command in the shell:"npm install"
3.navigate to GOplaces directory
4.run the command in the shell:"npm install"
5.run the command in the shell:"ng build"

COMMAND TO RUN APPLICATION
1.navigate to ExpressAssignment directory
2.run the command in the shell:"npm run start"


RUN APPLICATION IN DOCKER
docker-version:17.09
docker-compose:1.17.0-rc1
commands:
in the root directory run the following commands:
1.sudo docker-compose build
2.sudo docker-compose -d mongodb cassandradb
3.sudo docker-compose -d goplaces-server
4.sudo docker-compose logs 


