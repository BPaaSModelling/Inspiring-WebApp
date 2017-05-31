import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response, RequestOptions, URLSearchParams} from "@angular/http";
import {EndpointSettings} from "./_settings/enpoint.settings";
import {QuestionModel} from "./_models/question.model";
import {QuestionTypeModel} from "./_models/questiontype.model";

@Injectable()
export class BackendService {

  private headers;
  private options;

  private questions:QuestionModel[];
  public questions$:Observable<QuestionModel[]> = Observable.of([]);

  private questionTypes:QuestionTypeModel[];
  public questionTypes$:Observable<QuestionTypeModel[]> = Observable.of([]);


  constructor(
    private http: Http
  ) {
    this.questions = [];
    this.questionTypes = [];
    this.refreshQuestionTypes();
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public refreshQuestions(){
    this.getQuestions().subscribe(
      questions => {
        console.log("refreshQuestions " +questions);
        this.questions = questions;
        this.questions$ = Observable.of(this.questions);
      },
      err => {
        console.log(err);
      });
  }


  private getQuestions():Observable<QuestionModel[]>{
    return this.http.get(EndpointSettings.getQuestionsEndpoint())
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getQuestionByURI(questionURI:string):QuestionModel{

    console.log("stored qs " +JSON.stringify(this.questions));

    return this.questions.find(x => x.questionURI === questionURI);
  }

  private refreshQuestionTypes(){
    this.getQuestionTypes().subscribe(
      questionsTypes => {
        console.log("refreshQuestionTypes " +JSON.stringify(questionsTypes));
        this.questionTypes = questionsTypes;
        this.questionTypes$ = Observable.of(this.questionTypes);
      },
      err => {
        console.log(err);
      });
  }

  private getQuestionTypes():Observable<QuestionTypeModel[]>{
    return this.http.get(EndpointSettings.getQuestionTypeEndpoint())
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  public deleteQuestion(questionURI:string){
    return this.http.delete(EndpointSettings.getDeleteQuestionEndpoint(),
      new RequestOptions({
      search: new URLSearchParams('questionURI=' + questionURI)
    })).map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public addQuestion(question:QuestionModel){
    console.log("addQuestion " +JSON.stringify(question));
    return this.http.post(EndpointSettings.getAddQuestionEndpoint(), JSON.stringify(question), this.options)
      .map(response => response.json()).subscribe(
        success => {
          console.log('Done' +JSON.stringify(success));
          this.refreshQuestions();
        }, error => console.log('Could not update the question'));
  }


  public updateQuestion(question:QuestionModel){
    console.log("updateQuestion " +JSON.stringify(question));

    return this.http.put(EndpointSettings.getUpdateQuestionEndpoint(), JSON.stringify(question), this.options)
      .map(response => response.json()).subscribe(
        success => {
          console.log('Done' +JSON.stringify(success));
        }, error => console.log('Could not update the question'));
  }






}
