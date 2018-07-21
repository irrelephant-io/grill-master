import { Router } from 'express';
import MenuBuilder from '../services/MenuBuilder';
import StaticFoodTemplateRepo from '../repos/StaticFoodTemplateRepo';

const router = Router();

router.get('/', (req, res, next) => {
  const builder = new MenuBuilder(new StaticFoodTemplateRepo);
  const randomMenu = builder.getRandomMenu();
  const randomMenuItem = randomMenu.menuItems[0];
  res.render('index', {
    title: 'Grill Master',
    randomMenu: Object.assign(randomMenu, {
      menuItems: [ '...a list random of menu items' ]
    }),
    randomMenuItem
   });
});

export default router;
