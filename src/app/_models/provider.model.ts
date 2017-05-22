import {CompetenceModel} from "./competence.model";
export class ProviderModel {

  //rdfs:label
  public providerName:string;
  public competence:CompetenceModel[];

  constructor() {
    this.competence = [];
  }
}
