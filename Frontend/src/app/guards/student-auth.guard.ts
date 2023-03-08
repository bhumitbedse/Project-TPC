import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {

  constructor(private storageService:StorageService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if (this.storageService.isLoggedIn())
      {
        if(this.storageService.getUser().Role === 'Student')return true;
        return false;
      } 
      this.router.navigate(['auth']);
      return false;
    }
  
}