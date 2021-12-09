import express, { Application } from 'express';
import compression from 'compression';

// Routers
import membersApi from './routers/members';

// Express app
const app: Application = express();

// Common middlewares
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Applying routers
app.use('/api/v1/members/', membersApi);

export default app;
