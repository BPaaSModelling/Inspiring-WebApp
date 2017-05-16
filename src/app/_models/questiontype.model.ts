export class QuestionTypeModel {

  constructor(label:string, concept:string){

    this.questionTypeConcept = concept;
    this.questionTypeLabel = label;

  }

  public questionTypeLabel:string;
  public questionTypeConcept:string;
}
