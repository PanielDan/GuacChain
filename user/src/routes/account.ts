import { Router} from 'express';
import { UserController } from '../controller';

export const accountRouter: Router = Router();
const userContoller: UserController = new UserController();

accountRouter.get('/:email', (req, res, next) => userContoller.getUser(req, res, next));
accountRouter.post('/create', (req, res, next) => userContoller.createUser(req, res, next));