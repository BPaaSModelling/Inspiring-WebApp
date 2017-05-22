import { Component, OnInit } from '@angular/core';
import {ProviderModel} from "../_models/provider.model";
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../_services/admin.service";
import {CompetenceModel} from "../_models/competence.model";
import {ITSolutionModel} from "../_models/itsolution.model";
import {CompetenceTypeModel} from "../_models/competencetype.model";

@Component({
  selector: 'app-admin-insert-provider',
  templateUrl: './admin-insert-provider.component.html',
  styleUrls: ['./admin-insert-provider.component.css']
})
export class AdminInsertProviderComponent implements OnInit {

  private serviceProvider:ProviderModel;
  private currentCompetence:CompetenceModel;


  constructor(
    private adminService:AdminService
  ) {
    this.currentCompetence = new CompetenceModel();
    this.serviceProvider = new ProviderModel();
    this.adminService.updateCompetencesAndITSolution();
  }


  ngOnInit() {
  }

  private handleMultiSelect(competenceURI:CompetenceTypeModel):void{
    //console.log(". " +JSON.stringify(competenceURI));
    let index = this.currentCompetence.competenceList.indexOf(competenceURI, 0);
    if(index==-1) {
      //add item
      this.currentCompetence.competenceList.push(competenceURI);
    }else{
      //remove item
      this.currentCompetence.competenceList.splice(index, 1);
    }
    //console.log(" final array : " +JSON.stringify(this.currentCompetence.competenceList));
  }


  private addList(){
    this.serviceProvider.competence.push(this.currentCompetence);
    this.currentCompetence = new CompetenceModel();
    this.currentCompetence.competenceList = [];
    console.log(" final model : " +JSON.stringify(this.serviceProvider));
  }


  public checkOutput(){
    console.log("check :: " +JSON.stringify(this.currentCompetence));
  }


}
