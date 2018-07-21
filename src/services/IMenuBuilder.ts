import IMenu from "../models/IMenu";
import IMenuItem from "../models/IMenuItem";

export default interface IMenuBuilder {
    getRandomMenu(): IMenu;
    getRandomMenuItem(): IMenuItem;
}