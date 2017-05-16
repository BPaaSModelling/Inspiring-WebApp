import { Injectable } from '@angular/core';
import {QuestionModel} from "../_models/question.model";
import {Http} from "@angular/http";
import {EndpointSettings} from "../_settings/enpoint.settings";

@Injectable()
export class AdminService {

  constructor(
    private http: Http
  ) { }


  sendNewQuestion(question:QuestionModel){
    console.log("following object will be sent " + JSON.stringify(question));


    this.http.post(EndpointSettings.getAddQuestionEndpoint(), JSON.stringify(question))
      .map(response => response.json()).subscribe(
      success => {

        console.log('Done' +JSON.stringify(success));


      }, error => console.log('Could not query the questionnaire'));




  }

}
