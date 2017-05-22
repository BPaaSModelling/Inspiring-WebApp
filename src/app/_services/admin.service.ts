import { Injectable } from '@angular/core';
import {QuestionModel} from "../_models/question.model";
import {Http} from "@angular/http";
import {EndpointSettings} from "../_settings/enpoint.settings";
import {Observable} from "rxjs";
import {ITSolutionModel} from "../_models/itsolution.model";
import {CompetenceTypeModel} from "../_models/competencetype.model";
import {ProviderModel} from "../_models/provider.model";

@Injectable()
export class AdminService {

  private test:QuestionModel[]=[];
  private questionData$:Observable<QuestionModel[]> = Observable.of(this.test);

  private competences$:Observable<CompetenceTypeModel[]> = Observable.of(null);
  private itsolution$:Observable<ITSolutionModel[]> = Observable.of(null);

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

  public saveProvider(serviceProvider:ProviderModel){
    this.http.post(EndpointSettings.getAddProviderEndpoint(), JSON.stringify(serviceProvider))
      .map(response => response.json()).subscribe(
      success => {
        console.log('Done' +JSON.stringify(success));
      }, error => console.log('Could not query the questionnaire'));
  }

  public updateCompetencesAndITSolution(){
    this.updateCompetences();
    this.updateITSolution();
  }

  public updateITSolution(){
    return this.http.get(EndpointSettings.getAllITSolutionsEndpoint())
      .map(response => response.json()).subscribe(
        success => {
          console.log('Done' +JSON.stringify(success));
          this.itsolution$ = Observable.of(success);
        }, error => console.log('Could not query the IT Solutions'));
  }


  public updateCompetences(){
    return this.http.get(EndpointSettings.getAllCompetencesEndpoint())
      .map(response => response.json()).subscribe(
        success => {
          console.log('Done' +JSON.stringify(success));
          this.competences$ = Observable.of(success);
        }, error => console.log('Could not query the competences'));
  }

}
