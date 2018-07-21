import * as _ from "lodash";

import IFoodTemplateRepo from "./IFoodTemplateRepo";
import IFoodTemplate from "../models/IFoodTemplate";

import allTemplates from "./all-templates.json";

export default class StaticFoodTemplateRepo implements IFoodTemplateRepo {
    getRandomTemplate(): IFoodTemplate {
        return _.sample(allTemplates);
    }
}