import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public showSidenav: boolean = false;

  public toggleSidenav(): void {
    this.showSidenav = !this.showSidenav;
  }
}
