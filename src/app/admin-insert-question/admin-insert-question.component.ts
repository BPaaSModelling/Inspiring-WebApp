import {Component, OnInit, Input} from '@angular/core';
import {QuestionTypeModel} from "../_models/questiontype.model";
import {QuestionModel} from "../_models/question.model";
import {AdminService} from "../_services/admin.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-admin-insert-question',
  templateUrl: './admin-insert-question.component.html',
  styleUrls: ['./admin-insert-question.component.css']
})
export class AdminInsertQuestionComponent implements OnInit {

  private questionTypes:QuestionTypeModel[] = [];
  private question:QuestionModel = new QuestionModel();

  constructor(
    private backendService:BackendService,
    private route: ActivatedRoute,
  ) {

    this.questionTypes.push(new QuestionTypeModel("Single Select", "inspire:SingleSelection"));
    this.questionTypes.push(new QuestionTypeModel("Multi Select", "inspire:MultiSelection"));


  }

  ngOnInit() {


  //let a =   this.adminService.getQuestionByURI(this.route.snapshot.params['uri']);

   // console.log("input ngOnInit " +JSON.stringify(a));

  }

  sendQuestion(){
    console.log("button clicked");

    console.log(JSON.stringify(this.question));

    this.backendService.addQuestion(this.question);


  }

}
