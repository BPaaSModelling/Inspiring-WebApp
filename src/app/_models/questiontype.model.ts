export class QuestionTypeModel {

  constructor(label:string, concept:string){

    this.questionTypeURI = concept;
    this.questionTypeLabel = label;

  }

  public questionTypeLabel:string;
  public questionTypeURI:string;
}
