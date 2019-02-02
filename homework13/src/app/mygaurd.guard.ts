import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class mygaurdGuard implements CanActivate {
  constructor(private r: Router, private dataservice: DataService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('res', this.dataservice.getUserByUUID(route.params.uuid))
    if (this.dataservice.getUserByUUID(route.params.uuid).length > 0) {
      return true
    } else {
      this.r.navigate([''])
    }

    return false;

  }
}