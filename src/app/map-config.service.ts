import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MapConfigService {
  private app_id: string;
  private app_code: string;

  constructor() {
    this.app_id = "13hwYirltXKWTWuVQBHT";
    this.app_code = "81n03Tl0Oobk_csyXiyPLQ";
  }

  public get AppId() {
    return this.app_id;
  }
  public get AppCode() {
    return this.app_code;
  }
}
