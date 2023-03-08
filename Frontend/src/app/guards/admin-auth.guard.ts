import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private storageService:StorageService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      console.log("Here")
      if (this.storageService.isLoggedIn())
      {
        console.log("knknbg")
        if(this.storageService.getUser().Role === 'Admin')return true;
        return false;
      } 
      this.router.navigate(['auth']);
      return false;
    }
  
}
