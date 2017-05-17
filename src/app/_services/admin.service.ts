import { Injectable } from '@angular/core';
import {QuestionModel} from "../_models/question.model";
import {Http} from "@angular/http";
import {EndpointSettings} from "../_settings/enpoint.settings";
import {Observable} from "rxjs";

@Injectable()
export class AdminService {

  private test:QuestionModel[]=[];
  private questionData$:Observable<QuestionModel[]> = Observable.of(this.test);


  constructor(
    private http: Http
  ) { }


  public sendNewQuestion(question:QuestionModel){
    console.log("following object will be sent " + JSON.stringify(question));


    this.http.post(EndpointSettings.getAddQuestionEndpoint(), JSON.stringify(question))
      .map(response => response.json()).subscribe(
      success => {

        console.log('Done' +JSON.stringify(success));
        this.refreshQuestionList();


      }, error => console.log('Could not query the questionnaire'));
  }



  public getAllQuestions(){
    return this.http.get(EndpointSettings.getAllQuestionsEndpoint())
      .map(response => response.json());
  }


  public refreshQuestionList(){
    this.getAllQuestions().subscribe(
      success => {
        console.log('I-ve received' +JSON.stringify(success));
        this.questionData$ = Observable.of(success);
      }, error => console.log('Could not receive anything'));

  }

}
