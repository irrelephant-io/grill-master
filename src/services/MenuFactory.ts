import * as _ from 'lodash';
import IMenu from "../models/IMenu";
import IDimensions from "../models/IDimensions";
import IMenuItem from "../models/IMenuItem";
import IFoodTemplateRepo from '../repos/IFoodTemplateRepo';
import IFoodTemplate from '../models/IFoodTemplate';

export default class MenuFactory {

    constructor(private templateRepo: IFoodTemplateRepo) { }

    public getRandomMenu(): IMenu {
        return {
            grillSize: this.getRandomDimensions(
                { width: 50, height: 50 },
                { width: 120, height: 120 }
            ),
            menuItems: this.getRandomMenuItems(_.random(5, 15, false))
        }
    }

    private getRandomDimensions(min: IDimensions, max: IDimensions): IDimensions {
        return {
            width: _.random(min.width, max.width, false),
            height: _.random(min.height, max.height, false)
        };
    }

    private getRandomItem = (): IMenuItem => {
        const randomTemplate = this.templateRepo.getRandomTemplate();
        return {
            dimensions: this.getRandomDimensions(
                randomTemplate.minSize, randomTemplate.maxSize
            ),
            name: this.getNameFromTemplate(randomTemplate),
            count: _.random(5, 15, false)
        };
    }

    private getNameFromTemplate(foodTemplate: IFoodTemplate): string {
        const randomMaterial = _.sample(foodTemplate.materials);
        const randomAdditive = _.sample([...foodTemplate.additives, null]);
        const randomTrait = _.sample([...foodTemplate.traits, null, null, null]);
        return (randomTrait ? randomTrait + ' ' : '')
            + `${_.sample(foodTemplate.materials)} ${foodTemplate.type}`
            + (randomAdditive ? ` with ${randomAdditive}` : '');
    }

    private getRandomMenuItems(count: number): IMenuItem[] {
        return _
            .chain(_.range(count))
            .map(this.getRandomItem)
            .keyBy((item: IMenuItem) => item.name)
            .mergeWith((obj: IMenuItem, src: IMenuItem) => {
                return {
                    name: obj.name,
                    dimensions: obj.dimensions,
                    count: obj.count + src.count
                }
            })
            .values()
            .value();
    }
}