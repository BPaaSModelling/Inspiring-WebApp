import { Component, OnInit } from '@angular/core';
import {AdminService} from "../_services/admin.service";
import {Observable} from "rxjs";
import {QuestionModel} from "../_models/question.model";

@Component({
  selector: 'app-admin-list-questions',
  templateUrl: './admin-list-questions.component.html',
  styleUrls: ['./admin-list-questions.component.css']
})
export class AdminListQuestionsComponent implements OnInit {


  constructor(
    private adminService:AdminService
  ) {

    this.refreshQuestionList();

  }

  ngOnInit() {
  }


  private refreshQuestionList(){
    this.adminService.refreshQuestionList();
  }

}
