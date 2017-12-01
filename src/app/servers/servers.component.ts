import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',   //select by attribute
  // selector: '.app-servers',   //select by class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatusMessage = 'No Server Created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatusMessage = 'Server was created with name ' + this.serverName + '!';
  }

  onNameModified(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
