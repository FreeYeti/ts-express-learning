# This project is a learning project for Typescript

## Development

* Docker is required

### To develop

1. `./dev backend`: To start a development container

Following commands only allow in a dev-container

* `yarn test`: To run a test
* `yarn start`: To start a express server
* `yarn build`: To build the project to the dir of `build`
* `yarn start-staging`: To start a staging server

### Accessing

* pgAdmin4: [http://localhost:8001/](http://localhost:8001/) (email and password: p@g.sql/postgres, database password: postgres)
* development server: [http://localhost:3000](http://localhost:3000)

### To recycle developing resources

* `./dev down`: To remove development containers, but all data will be persisted.
* Remove the project directry to release storage.


## Reference

* https://tsh.io/blog/reduce-node-modules-for-better-performance/