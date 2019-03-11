import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

declare var H: any;
const PIXEL_RATIO = window.devicePixelRatio;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.less"]
})
export class MapComponent implements OnInit {
  private platform: any;
  private defaultLayers: any;
  private map: any;
  private behavior: any;
  private ui: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  public constructor() {
    this.platform = new H.service.Platform({
      app_id: "13hwYirltXKWTWuVQBHT",
      app_code: "81n03Tl0Oobk_csyXiyPLQ"
    });

    this.defaultLayers = this.platform.createDefaultLayers({
      tileSize: PIXEL_RATIO === 1 ? 256 : 512,
      ppi: PIXEL_RATIO === 1 ? undefined : 320
    });
  }

  public ngOnInit() {}

  public ngAfterViewInit() {
    this.map = new H.Map(
      this.mapElement.nativeElement,
      this.defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 37.7397, lng: -121.4252 },
        pixelRatio: PIXEL_RATIO
      }
    );

    this.behavior = new H.mapevents.Behavior(
      new H.mapevents.MapEvents(this.map)
    );

    this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);
  }
}
