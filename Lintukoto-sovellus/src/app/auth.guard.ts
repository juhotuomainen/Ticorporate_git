// "vahti" joka katsoo onko käyttäjä kirjautunut sisään

import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  // boolean kertoo minkä muotoinen palautusarvo on
  checkLogin(url: string): boolean {
    if (this.authService.loggedIn) {
      return true;
    }
    this.router.navigate(['/kirjautuminen']);
    return false;
  }
}
