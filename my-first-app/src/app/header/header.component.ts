import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

  @Output('routePage') pageSelected = new EventEmitter<string>();

  onSelect(url:string) {
    this.pageSelected.emit(url);
  }

}
