import {Component, OnInit, AfterViewInit} from '@angular/core';
import {QuestionModel} from "../_models/question.model";
import {BackendService} from "../backend.service";
import {QuestionTypeModel} from "../_models/questiontype.model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-admin-question-insert-edit',
  templateUrl: './admin-question-insert-edit.component.html',
  styleUrls: ['./admin-question-insert-edit.component.css']
})
export class AdminQuestionInsertEditComponent implements OnInit, AfterViewInit {

  private model = new QuestionModel();
  private editing = false;
  public myForm: FormGroup;

  constructor(
    private backendService:BackendService,
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder
  ) {
  }

  ngAfterViewInit() {
    if(this.editing){
      console.log("editing ngAfterViewInit");

    }
  }

  ngOnInit() {

    let a =   this.route.snapshot.params['uri'];
    if(a!=null){
      this.editing = true;
      console.log("editing");
      this.model = this.backendService.getQuestionByURI(a);
      this.fillForm();
      console.log("eeeeeeee " +JSON.stringify(this.model));
    }else{
      console.log("new");
      this.editing = false;
      this.myForm = this._fb.group({
        questionLabel: [],
        questionType: [],
        questionURI: [],
        answerList: this._fb.array([
          this.initAddress()
        ])
      });
    }




  }

  private test(){
    console.log("test done");
    return this._fb.group({
      answerLabel: ['a'],
      answerURI: ['b']
    });

  }


  private fillForm(){
    this.myForm = this._fb.group({
      questionLabel: [this.model.questionLabel],
      questionType: [this.model.questionType],
      questionURI: [this.model.questionURI],
      answerList: this._fb.array([
      ])
    });


    this.myForm.setControl("answerList", this._fb.array(this.model.answerList));
    this.myForm.patchValue(this.model);
    //(<FormArray>this.myForm.controls['answerList']).controls['email'].patchValue('myvalue@asd.com');

  }

  private fillAnswerArray(){
    for (let i in this.model.answerList) {
      console.log(i +this.model.answerList[i].answerURI);
    }
  }

  private


  private submitForm(question:QuestionModel){
    console.log("********** " +JSON.stringify(question));

    if(!this.editing){
      this.backendService.addQuestion(question)
    } else {
      this.backendService.updateQuestion(this.model)
    }

    // Empty model
    this.model = new QuestionModel();
    // Switch editing status
    if(this.editing) this.editing = !this.editing;
    this.router.navigate(['admin/question/list']);

  }


  private addAnswer() {
    const control = <FormArray>this.myForm.controls['answerList'];
    control.push(this.initAddress());
  }

  private initAddress() {
    return this._fb.group({
      answerLabel: [''],
      answerURI: ['']
    });
  }

}
