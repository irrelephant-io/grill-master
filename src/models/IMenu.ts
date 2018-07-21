import IDimensions from "./IDimensions";
import IMenuItem from "./IMenuItem";

export default interface IMenu {
    grillSize: IDimensions;
    menuItems: IMenuItem[];
}