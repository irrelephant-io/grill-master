import IFoodTemplate from "../models/IFoodTemplate";

export default interface IFoodTemplateRepo {
    getRandomTemplate(): IFoodTemplate;
}