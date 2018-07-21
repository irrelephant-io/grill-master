import { Router } from 'express';
import MenuFactory from '../services/MenuFactory';

const router = Router();

router.get('/', (req, res, next) => {
  res.json(
    new MenuFactory().getRandomMenu()
  );
});

export default router;