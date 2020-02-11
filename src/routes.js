import { Router } from 'express';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/midddlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Global Middleware
routes.use(authMiddleware);
// Only the route below will use the auth middleware
routes.put('/users', UserController.update);

export default routes;
