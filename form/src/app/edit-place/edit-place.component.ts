import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ServerService } from '../server.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {
  @ViewChild('f') addPlaceForm: NgForm;
  place: any;
  eplace = {
    names: ['Name1' , 'Name2', 'Name3'],
    placeName: '',
    type: '',
    operDay: '',
    operTime: '',
    suggTime: '',
    area: '',
    cost: '',
    transportation: '',
    description: ''
  };
  name = [];

  urls = new Array<string>();
  submitted = false;
  moreName: boolean = false;
  filesToUpload: Array<File> = [];

  lat: any;
  lng: any;
  imageData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private serverService: ServerService,
    private http: Http,
    private data: DataService
  ) { }
  ngOnInit() {
    this.getPlace();
    // this.eplace = {
    //   placeName: 'this.place[0].placeName',
    //   type: 'this.place[0].type',
    //   operDay: 'this.place[0].operDay',
    //   operTime: 'this.place[0].operTime',
    //   suggTime: 'this.place[0].suggTime',
    //   area: 'this.place[0].area',
    //   cost: 'this.place[0].cost',
    //   transportation: 'this.place[0].transportation',
    //   description: 'this.place[0].description'
    // };
    console.log('this.eplace');
    console.log(this.eplace);
  }
  addMoreName() {
    if(this.moreName==false) this.moreName = true;
    else this.moreName = false;
  }
  getPlace() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serverService.getPlace(id)
      .subscribe(
        (res) => {
          console.log(res);
          const data = res.json();
          this.place = data;
          this.eplace = {
            placeName: this.place[0].name,
            names: ['', '', ''] ,
            type: this.place[0].type.toLowerCase(),
            operDay: this.place[0].operDate,
            operTime: this.place[0].operTime,
            suggTime: this.place[0].suggTime,
            area: this.place[0].zone,
            cost: this.place[0].cost,
            transportation: this.place[0].transportation,
            description: this.place[0].description
          };
          // this.eplace = this.place[0];
          // for(var i=0; i<this.eplace.names.length; i++) {
          //   if(this.eplace.names[i]!='') {
          //     this.eplace.names[i]=this.getNames(i, res.json()[0].attID);
          //   }
          // }
          console.log(this.eplace);
          console.log('this.place=');
          console.log(this.place[0]);
          console.log(typeof(this.place[0]));
          this.lat = parseFloat(this.place[0].lat);
          this.lng = parseFloat(this.place[0].lng);
        },
        (error) => console.log('error')
      );

    this.serverService.getImage(id)
      .toPromise()
      .then((res: any) => {
        let blob = new Blob([res._body], {
          type: res.headers.get("Content-Type")
        });

        let urlCreator = window.URL;
        this.imageData = this.sanitizer.bypassSecurityTrustUrl(
         urlCreator.createObjectURL(blob));
        console.log(this.imageData);
      });
  }
  onSubmit() {
    this.submitted = true;
    this.place.placeName = this.addPlaceForm.value.placeName;
    this.place.type = this.addPlaceForm.value.type;
    this.place.operDay = this.addPlaceForm.value.operDay;
    this.place.operTime = this.addPlaceForm.value.operTime;
    this.place.suggTime = this.addPlaceForm.value.suggTime;
    this.place.area = this.addPlaceForm.value.area;
    this.place.cost = this.addPlaceForm.value.cost;
    this.place.transportation = this.addPlaceForm.value.transportation;
    this.place.description =  this.addPlaceForm.value.description;
    this.name.push(this.addPlaceForm.value.placeName2);
    this.name.push(this.addPlaceForm.value.placeName3);
    this.name.push(this.addPlaceForm.value.placeName4);

    this.serverService.editPlace(this.place)
      .subscribe(
          (res) => {
            console.log(res.json()[0].attID),
        this.upload(res.json()[0].attID);
         for(var i=0; i<this.name.length; i++) {
           if(this.name[i]!='') this.setName(i, res.json()[0].attID);
         }
          },
          (err) => console.log('err')
      );

  }
  detectFiles(event) {
    this.filesToUpload = <Array<File>>event.target.files;
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
          console.log(this.urls);
    }
  }
  setName(i, att) {
    this.serverService.setName(this.name[i], att)
    .subscribe(
      (res) => console.log('yey')
      );
  }
  upload(id) {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
    this.serverService.uploadImage(id, formData)
        .subscribe(files => {
          this.router.navigate(['/searchPlace']);
          alert("Success adding the place");
        });
  }
  goBack() {
    this.router.navigate(['/admin/places']);
  }
  reviewChange() {
    this.router.navigate(['/detail/' + this.route.snapshot.paramMap.get('id')]);
  }
  onReset() {
    this.submitted = false;
    this.addPlaceForm.reset();
  }
}
