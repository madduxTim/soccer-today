import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs";
import { MatchDataService } from "./match-data-service";

@Injectable()
export class MatchesResolver implements Resolve<any> {
    constructor(private matchService: MatchDataService){

    }
    resolve() {
        return this.matchService.getMatches().pipe(map(matches=>matches));
    }
}