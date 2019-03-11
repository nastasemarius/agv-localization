import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
declare var H: any;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.less"]
})
export class MapComponent implements OnInit {
  private platform: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  public constructor() {
    this.platform = new H.service.Platform({
      app_id: "13hwYirltXKWTWuVQBHT",
      app_code: "81n03Tl0Oobk_csyXiyPLQ"
    });
  }

  public ngOnInit() {}

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 37.7397, lng: -121.4252 }
      }
    );
  }
}
