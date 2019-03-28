import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MapConfigService } from "./map-config.service";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpClient, private mapConfig: MapConfigService) {}

  public getSearchResults(searchTerm: string) {
    const url = `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=${
      this.mapConfig.AppId
    }&app_code=${this.mapConfig.AppCode}&query=${searchTerm.trim()}`;

    return this.http.get(url);
  }
}
