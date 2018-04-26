import { Component, OnInit } from '@angular/core';
import { ServerService }       from '../server.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {
  route: any;
  lat= [];
  lng= [];
  imageData: any;
  show = false;
  isModify = [];
  relatedPlaces = [];
  temp: any;

  constructor(
    private routed: ActivatedRoute,
    private serverService: ServerService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	this.getRoute();
  }

  getRoute() {
    const id = +this.routed.snapshot.paramMap.get('id');
    this.serverService.getRoute(id)
      .subscribe(
        (res) => {
          console.log(res);
          const data = res.json();
          this.route = data;
          console.log(this.route[0]);
          for (var i=0; i<this.route.length; i++) {
              this.lat[i] = parseFloat(this.route[i].lat);
              this.lng[i] = parseFloat(this.route[i].lng);
          		this.isModify.push(false);
          		this.relatedPlaces.push({});
                this.callImage(i);
          }
        },
      );
  }

  callImage(count) {
    this.serverService.getImage(this.route[count].attID)
      .toPromise()
      .then((res: any) => {
        let blob = new Blob([res._body], {
          type: res.headers.get("Content-Type")
        });

        let urlCreator = window.URL;
          this.imageData = this.sanitizer.bypassSecurityTrustUrl(
             urlCreator.createObjectURL(blob));
          this.route[count]['img'] = this.imageData;
        });
  }
  modifyPlace(i) {
  	console.log(i);
  	if(this.isModify[i] == false) {
  		for (var j=0; j<this.isModify.length; j++) {
  			this.isModify[j] = false;
  		}
  		this.isModify[i] = true;
  	}
  	else this.isModify[i] = false;
  	console.log(this.isModify[i]);
  	this.serverService.relatedPlaces(this.route[i].attID)
  		.subscribe(
  			(res) => {
  				console.log(res.json());
  				this.relatedPlaces[i] = res.json();
  				this.temp = this.relatedPlaces[i];
  		});
  }

  choosePlace(i, j) {
  	this.serverService.getPlace(this.temp[j].attID)
  	.subscribe(
  			(res) => {
  				console.log(res.json());
  				this.route[i] = res.json()[0];
  		});
    this.serverService.getImage(this.temp[j].attID)
      .toPromise()
      .then((res: any) => {
        let blob = new Blob([res._body], {
          type: res.headers.get("Content-Type")
        });

        let urlCreator = window.URL;
          this.imageData = this.sanitizer.bypassSecurityTrustUrl(
             urlCreator.createObjectURL(blob));
          this.route[i]['img'] = this.imageData;
          this.route[i]['time'] = i+1;
  	this.isModify[i] = false;
  				console.log(this.route);
        });
  }

  exportPDF() {
  	console.log('exporting');
  }
}
