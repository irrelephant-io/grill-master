import { Router } from 'express';
import MenuFactory from '../services/MenuFactory';
import StaticFoodTemplateRepo from '../repos/StaticFoodTemplateRepo';

const router = Router();

router.get('/', (req, res, next) => {
  res.json(
    new MenuFactory(new StaticFoodTemplateRepo).getRandomMenu()
  );
});

export default router;