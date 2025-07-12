# express-4x-api-starter

The express 4x starter for RestAPI project. Also Docker provided for production build.

## Getting started

Set your environment variables, update all variables in `.env` with correct values

```bash
$ cp .env.example .env
```

Install dependencies

```bash
$ npm install
```

## Start app

For development, will start using [nodemon](https://nodemon.io/)

```bash
$ npm run start:dev
```

**_Starter routes_**

- /v1/docs
- /v1/users

## Versioning

Starter route will provide API version with:

```text
http://localhost:3000/
http://localhost:3000/v1/
http://localhost:3000/latest/
```

## Docker

### Build

```bash
docker build . -t express-4x-api-starter
```

## License

[MIT](LICENSE.md)
