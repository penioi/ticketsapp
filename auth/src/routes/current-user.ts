import express from 'express';
import { currentUser } from '../middlewares/current-users';
import { requireAuth } from '../middlewares/requireAuth';

const router = express.Router();

router.get('/api/users/currentUser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser });
});

export { router as currentUserRouter };
