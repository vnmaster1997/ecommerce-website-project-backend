<<<<<<< HEAD
# x-commerce

```mermaid
sequenceDiagram
   actor User
   participant nKYC Front End
   participant nKYC Smart Contract
   participant NKYC Proxy
```

## Get Started

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file
## Lint It

View airbnb linter output

```
npm run lint
```

Fix all airbnb linter errors

```
npm run lint
```

## Deploy It

Deploy to CloudFoundry

```shell
cf push x-commerce
```


   
=======
# ecommerce-website-project-backend
backend
>>>>>>> 2387e6854ad2c87babe5f45cc3877b92029e915d
