import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles:[`
    .id{
      color:red;
    }
    .status{
      color:green;
    }
  `]
})
export class ServerComponent {
  serverID:number = 10;
  serverStatus:string = "offline";


  getServerStatus() {
    return this.serverStatus;
  }
}

