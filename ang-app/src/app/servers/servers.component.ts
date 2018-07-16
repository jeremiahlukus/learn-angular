import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Test1', 'Test2']; 
  constructor() {
    setTimeout(() => {
    this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
  }
}
