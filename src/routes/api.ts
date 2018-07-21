import { Router } from 'express';
import StaticFoodTemplateRepo from '../repos/StaticFoodTemplateRepo';
import MenuBuilder from '../services/MenuBuilder';

const router = Router();

router.get('/menus', (req, res, next) => {
  res.json(
    new MenuBuilder(new StaticFoodTemplateRepo).getRandomMenu()
  );
});

export default router;