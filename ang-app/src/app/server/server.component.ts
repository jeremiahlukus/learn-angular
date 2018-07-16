import { Component } from '@angular/core';

@Component({
  selector: 'server-selector',
  templateUrl: './server.component.html',
  styles: [`
  .online {
  color: white;
  }
  `]

})

export class ServerComponent { 
  serverID: number = 10;
  serverStatus: string = 'offline'

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus(){
    return this.serverStatus;
  }
}

