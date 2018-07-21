import IDimensions from "./IDimensions";

export default interface IFoodTemplate {
    type: string;
    materials: string[];
    additives: string[];
    traits: string[];
    minSize: IDimensions;
    maxSize: IDimensions;
    hasDifferentSizes: boolean;
}