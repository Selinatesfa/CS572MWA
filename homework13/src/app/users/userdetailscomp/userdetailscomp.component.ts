import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-details',
  template: `
    <p>
        <br />
      {{user.login.uuid}}
    </p>
  `,
  styles: []
})
export class UserdetailscompComponent implements OnInit {
  private uuid;
  private user;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    route.params.subscribe(p => {
      this.uuid = p['uuid'];
    });
  }

  ngOnInit() {

    this.user = this.dataService.getUserByUUID(this.uuid)[0];
    console.log(this.user)
  }



}




