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

## Versioning

Starter route will provide API version with:

```text
http://localhost:3000/
http://localhost:3000/v1/
http://localhost:3000/latest/
```

Which point the the same controller. Each version stay on it own folder. So, it would be easy to manage API versions.

For example, when release `/v4`. The `/latest` will be point to `/v4` as well. While we could remove `/v1` from route as deprecated version.

```text
/v1/ ---> (removed)
/v2/ 
/v3/ 
/v4/ ---> /latest/
```

It depends, if version need to be specified.

```text
/  ---> /latest/
```

## License

[MIT](LICENSE.md)