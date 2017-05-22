import {ITSolutionModel} from "./itsolution.model";
import {CompetenceTypeModel} from "./competencetype.model";

export class CompetenceModel {

  public itsolution:ITSolutionModel;
  public competenceList:CompetenceTypeModel[];

  constructor() {
    this.itsolution = new ITSolutionModel();
    this.competenceList = [];
  }
}
