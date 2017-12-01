import {Component} from '@angular/core';

@Component({
  // selector: '[app-server]',   //select by attribute
  // selector: '.app-server',   //select by class
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    p{
      text-decoration: dotted;
    }
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
