import { PlaceService } from "./place.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  address = "";
  constructor(private placeSvc: PlaceService) {}

  ngOnInit() {
    this.placeSvc.getAddress().subscribe(currAddress => {
      this.address = currAddress;
    });
  }
  onLogout() {}
}
