import IMenu from "../models/IMenu";
import IDimensions from "../models/IDimensions";

export default class MenuFactory {
    public getRandomMenu(): IMenu {
        return {
            grillSize: this.getRandomDimensions(
                { width: 50, height: 50 },
                { width: 120, height: 120 }
            ),
            menuItems: []
        }
    }

    private getRandomDimensions(min: IDimensions, max: IDimensions): IDimensions {
        return {
            width: min.width + 
                parseInt((Math.random() * (max.width - min.width)).toString()),
            height: min.height + 
                parseInt((Math.random() * (max.height - min.height)).toString())
        };
    }
}