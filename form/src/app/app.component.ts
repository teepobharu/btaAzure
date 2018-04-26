import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";
import { ServerService }       from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bangkok Traveling Assistance';

	message: string;
	user: string;

  constructor(private data:DataService,
  	private serverService: ServerService) { }

  ngOnInit() {
  	this.data.currentMessage.subscribe(message => {
  		this.message = message;
  		this.getUser();
  	})
  }

  getUser() {
  	this.serverService.getUser(this.message) 
  	.subscribe((res) => this.user = res.json()[0].name);
  }
}