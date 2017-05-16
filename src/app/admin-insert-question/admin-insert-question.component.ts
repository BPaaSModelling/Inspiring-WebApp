import { Component, OnInit } from '@angular/core';
import {QuestionTypeModel} from "../_models/questiontype.model";
import {QuestionModel} from "../_models/question.model";
import {AdminService} from "../_services/admin.service";

@Component({
  selector: 'app-admin-insert-question',
  templateUrl: './admin-insert-question.component.html',
  styleUrls: ['./admin-insert-question.component.css']
})
export class AdminInsertQuestionComponent implements OnInit {

  private questionTypes:QuestionTypeModel[] = [];

  private question:QuestionModel = new QuestionModel();

  constructor(
    private adminService:AdminService
  ) {

    this.questionTypes.push(new QuestionTypeModel("Single Select", "questionnaire:SingleSelect"));
    this.questionTypes.push(new QuestionTypeModel("Multi Select", "questionnaire:MultiSelect"));

  }

  ngOnInit() {
  }

  sendQuestion(){
    console.log("button clicked");

    console.log(JSON.stringify(this.question));

    this.adminService.sendNewQuestion(this.question);

  }

}
