import {AnswerModel} from "./answer.model";

export class QuestionModel {

  constructor(){
  }

  public questionLabel:string;
  public questionType:string;
  public questionURI:string;
  public answerList:AnswerModel[];
}


