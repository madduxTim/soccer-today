import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { MatchDataService } from "./match-data-service";

@Injectable()
export class MatchRouteActivator implements CanActivate {
    constructor(private matchData: MatchDataService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const exists = !!this.matchData.getMatch(route.params['id']);
        if (!exists){
            this.router.navigate(['/404']);
        }
        return exists;
    }

}