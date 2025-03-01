# Red Sox Developer Project - Backend

For detailed project information please consult the frontend project's README.md.

## Starting the backend project

Please ensure you have npm installed. [NPM](https://www.npmjs.com/)

1. Run `npm install` from the project directory.
2. Open `config.ts` and edit `snowflakeUser` and `snowflakePassword` with the credentials you received.
3. Use `npm run serve` to start the backend webserver.
4. On startup, check the console output to ensure the connection to Snowflake was successful.
5. The defined endpoints will be available via `http://localhost:3001/`

## Application structure

```
├───controllers
├───app.ts
├───config.ts
└───snowflake.ts
```

- controllers: request handling
- app.ts: basic server configuration and endpoint definitions
- config.ts: specifies login information necessary for connecting to Snowflake.
- snowflake.ts: client for opening a connection to Snowflake and running queries.

#### Wrapping up

Once you've finished your work, please consult the README.md in the frontend project for how to proceed.

Thank you for your time!
