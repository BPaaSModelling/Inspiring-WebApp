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

  private test:any;


  constructor(
    private adminService:AdminService
  ) {
    this.currentCompetence = new CompetenceModel();
    this.serviceProvider = new ProviderModel();
    this.adminService.updateCompetencesAndITSolution();
  }

  ngOnInit() {
  }

  private addList(){
    this.serviceProvider.competence.push(this.currentCompetence);
    this.currentCompetence = new CompetenceModel();
    console.log(" final model : " +JSON.stringify(this.serviceProvider));

  }

  public saveProvider(){
    this.adminService.saveProvider(this.serviceProvider);
    console.log("check :: " +JSON.stringify(this.currentCompetence));
  }


}
