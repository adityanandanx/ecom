# E-Commerce Nextjs + Express + Clerk

An E-Commerce made with [Next.js](https://nextjs.org/) as the the BFF(Backend for Frontend), [Express](https://expressjs.com/) for the backend and [Clerk](https://clerk.com/) for authentication.
<br>
Other technologies are Prisma as the ORM, and Jest for writing unit tests for the express server.

## Server -

### Libraries -

- [Express](https://expressjs.com/) - http framework
- [Helmet](https://helmetjs.github.io/) - helps secure Express apps by setting HTTP response headers.
- [Prisma](https://www.prisma.io/) - ORM
- [Jest](https://jestjs.io/) - Testing
- [Clerk](https://clerk.com/) - Authentication

### Architecture -

```
src/
  api/
    index.ts
      api.test.ts
    product/
      product.controller.ts
      product.model.ts
      product.route.ts
      product.service.ts
      product.test.ts
    <entity>/
      <entity>.controller.ts
      <entity>.model.ts
      <entity>.route.ts
      <entity>.service.ts
      <entity>.test.ts
    ...
  interfaces/
  middlewares/
  app.ts
  app.test.ts
  db.ts
  index.ts
```

- `src` is the root directory of the application.
- `api` contains entities.
- each `entity` contains a -
  - service - Contains business logic and interacts with the data layer
  - controller - handles request/response logic specific to the entity and calls appropriate services
  - model - defines the structure and behavior of the entity
  - route - binds controllers to appropriate routes and methods
  - test - for testing every route and method
- `interfaces` contains base types and/or specific types for objects (not to be confused with models)
- `middlewares` middlewares for custom error handling, authentication and request validation
- `app.ts` main entry point of the application
- `db.ts` exports prisma client
- `index.ts` launches the app by listening on a specific port
