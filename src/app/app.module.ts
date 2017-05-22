import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  MdButtonModule, MdInputContainer, MdInputModule, MdRadioModule, MdAutocompleteModule,
  MdSelectModule, MdCheckboxModule, MdGridTile, MdGridListModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AdminInsertQuestionComponent } from './admin-insert-question/admin-insert-question.component';
import {Routes, RouterModule} from "@angular/router";
import {AdminService} from "./_services/admin.service";
import { AdminListQuestionsComponent } from './admin-list-questions/admin-list-questions.component';
import { AdminInsertProviderComponent } from './admin-insert-provider/admin-insert-provider.component';


const appRoutes: Routes = [
  {
    path: 'admin/question/insert',
    component: AdminInsertQuestionComponent,
  },
  {
    path: 'admin/question/list',
    component: AdminListQuestionsComponent,
  },
  {
    path: 'admin/provider/insert',
    component: AdminInsertProviderComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    AdminInsertQuestionComponent,
    AdminListQuestionsComponent,
    AdminInsertProviderComponent
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
    MdGridListModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
