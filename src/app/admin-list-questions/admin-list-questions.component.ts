import {Component, OnInit, OnChanges} from '@angular/core';
import {AdminService} from "../_services/admin.service";
import {Observable} from "rxjs";
import {QuestionModel} from "../_models/question.model";
import {BackendService} from "../backend.service";
import {EndpointSettings} from "../_settings/enpoint.settings";

@Component({
  selector: 'app-admin-list-questions',
  templateUrl: './admin-list-questions.component.html',
  styleUrls: ['./admin-list-questions.component.css']
})
export class AdminListQuestionsComponent implements OnInit {

  private SINGLESELECTION:string = "http://ikm-group.ch/archiMEO/inspire#SingleSelection";
  private MULTISELECTION:string = "http://ikm-group.ch/archiMEO/inspire#MultiSelection";


    private questions:QuestionModel[];


  constructor(
    private backendService:BackendService
  ) {
    this.backendService.refreshQuestions()
  }

  ngOnInit() {
  }


  private delete(question:QuestionModel){
    this.backendService.deleteQuestion(question.questionURI).subscribe(
      result => {
        this.backendService.refreshQuestions()
      },
      err => {
        // Log errors if any
        console.log(err);
      });

    //this.adminService.deleteQuestion(question);
  }

}
