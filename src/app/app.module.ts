import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  MdButtonModule, MdInputModule, MdRadioModule, MdAutocompleteModule,
  MdSelectModule, MdCheckboxModule, MdGridListModule, MdToolbarModule, MdCardModule, MdIconModule, MdIconRegistry,
  MdChipsModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AdminInsertQuestionComponent } from './admin-insert-question/admin-insert-question.component';
import {Routes, RouterModule} from "@angular/router";
import {AdminService} from "./_services/admin.service";
import { AdminListQuestionsComponent } from './admin-list-questions/admin-list-questions.component';
import { AdminInsertProviderComponent } from './admin-insert-provider/admin-insert-provider.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminListProvidersComponent } from './admin-list-providers/admin-list-providers.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import {BackendService} from "./backend.service";
import { AdminQuestionInsertEditComponent } from './admin-question-insert-edit/admin-question-insert-edit.component';


const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    children:[
      {
        path: 'question/insert',
        component: AdminQuestionInsertEditComponent,
      },
      {
        path: 'question/edit/:uri',
        component: AdminQuestionInsertEditComponent,
      },
      {
        path: 'question/list',
        component: AdminListQuestionsComponent,
      },
      {
        path: 'provider/insert',
        component: AdminInsertProviderComponent,
      },
      {
        path: 'provider/list',
        component: AdminListProvidersComponent,
      },
    ]
  },
  {
    path: '',
    component: QuestionnaireComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    AdminInsertQuestionComponent,
    AdminListQuestionsComponent,
    AdminInsertProviderComponent,
    AdminHomeComponent,
    AdminListProvidersComponent,
    QuestionnaireComponent,
    AdminQuestionInsertEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes , { useHash: false }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdRadioModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    MdSelectModule,
    MdCheckboxModule,
    MdGridListModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    MdChipsModule

  ],
  providers: [MdIconRegistry, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
