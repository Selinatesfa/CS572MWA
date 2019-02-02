import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
        <nav>
        <a [routerLink]="['']">Home</a> <br>
        <a [routerLink]="['users']">Users</a><br>
        <a [routerLink]="['users','userdetails']">Userdetails</a>
    </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dataService: DataService) { }
  title = 'Appmodule';
  ngOnInit() {
    this.dataService.getOnlineDate().subscribe(
      response => {
        localStorage.setItem('data', JSON.stringify(response));
      },
      error => console.error(error)
    )

  }
}
