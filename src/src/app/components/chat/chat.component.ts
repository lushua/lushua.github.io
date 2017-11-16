import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {
  private connection: HubConnection;

  constructor() {
    this.connection = new HubConnection('http://cochre.azurewebsites.net/chat');
    this.connection.start();

    this.connection.on('send', data => {
      const ul = document.getElementById('chatWidow') as HTMLUListElement;
      const messageBox = document.getElementById('messageBox') as HTMLInputElement;
      const nickBox = document.getElementById('nickBox') as HTMLInputElement;

      const datas = (data as string).split('_');

      ul.innerHTML += '<li class="list-group-item"><strong>' + datas[0] + '</strong>: ' + datas[1] + '</li>';
    });
   }

   public SendMessage() {
    const ul = document.getElementById('chatWidow') as HTMLUListElement;
    const messageBox = document.getElementById('messageBox') as HTMLInputElement;
    const nickBox = document.getElementById('nickBox') as HTMLInputElement;

    console.log('pressed ', messageBox.value);
    // ul.innerHTML += '<li class="list-group-item"><strong>' + nickBox.value + '</strong>: ' + messageBox.value + '</li>';
    this.connection.invoke('send', nickBox.value + '_' + messageBox.value);
   }

  ngOnInit() {
  }

}
