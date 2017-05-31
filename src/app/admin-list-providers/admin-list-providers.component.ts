import { Component, OnInit } from '@angular/core';
import {AdminService} from "../_services/admin.service";

@Component({
  selector: 'app-admin-list-providers',
  templateUrl: './admin-list-providers.component.html',
  styleUrls: ['./admin-list-providers.component.css']
})
export class AdminListProvidersComponent implements OnInit {

  constructor(
    private adminService:AdminService
  ) {
    this.adminService.refreshProviderList();
  }

  ngOnInit() {
  }

}
