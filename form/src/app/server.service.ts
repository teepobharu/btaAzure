import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { HttpClient } from'@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from'rxjs/Observable';

@Injectable()
export class ServerService {
	constructor(private http: Http) {}

	createPlace(place) {
		return this.http.post('http://localhost:8000/api/createPlace', place);
	}

	createEvent(event) {
		return this.http.post('http://localhost:8000/api/createEvent', event);
	}

	getPlaces() {
		return this.http.get('http://localhost:8000/api/getPlaces');
	}

	getEvents() {
		return this.http.get('http://localhost:8000/api/getEvents');
	}

	getPlace(id) {
		console.log(id);
		return this.http.post('http://localhost:8000/api/getPlace', {id: id});
	}

	getEvent(id) {
		console.log(id);
		return this.http.post('http://localhost:8000/api/getEvent', {id: id});
	}

	getUnvPlaces() {
		return this.http.get('http://localhost:8000/api/getUnvPlaces');
	}

	getUnvEvents() {
		return this.http.get('http://localhost:8000/api/getUnvEvents');
	}

	getComments(id) {
		console.log(id);
		return this.http.get('http://localhost:8000/api/getComments/'+id);
	}

	getRoute(id) {
		console.log(id);
		return this.http.get('http://localhost:8000/api/getRoute/'+id);
	}

	getUser(id) {
		console.log(id);
		return this.http.get('http://localhost:8000/api/getUser/'+id);
	}

	suggestPlaces(key) {
		console.log(key);
		return this.http.get('http://localhost:8000/api/suggestPlaces/'+key);
	}

	listPlaces(type) {
		console.log(type);
		return this.http.post('http://localhost:8000/api/listPlaces', {type: type});
	}

	listEvents() {
		return this.http.get('http://localhost:8000/api/listEvents');
	}

	findPlace(searchKey) {
		console.log(searchKey);
		return this.http.post('http://localhost:8000/api/findPlace', {searchKey: searchKey});
	}

	uploadImage(id, formData) {
		console.log(formData);
		return this.http.post('http://localhost:8000/upload/'+id, formData);
	}

	getImage(id) {
		return this.http.get('http://localhost:8000/pic/'+id, {responseType: ResponseContentType.Blob});
	}

	getEventImage(id) {
		return this.http.get('http://localhost:8000/eventpic/'+id, {responseType: ResponseContentType.Blob});
	}

	checkUnvalidated() {
		return this.http.get('http://localhost:8000/api/checkUnv');
	}

	relatedPlaces(id) {
		console.log(id);
		return this.http.get('http://localhost:8000/api/relatedPlaces/'+id);
	}

	relatedArea(id) {
		console.log(id);
		return this.http.get('http://localhost:8000/api/relatedArea/'+id);
	}

	token(email, name) {
		console.log(name);
		return this.http.post('http://localhost:8000/api/token/', {email: email, name: name});
	}

	checkFav(user, id) {
		return this.http.post('http://localhost:8000/api/checkFav', {user: user, id: id});
	}

	removeFav(user, id) {
		return this.http.post('http://localhost:8000/api/addFav', {user: user, id: id});
	}

	addFav(user, id) {
		return this.http.post('http://localhost:8000/api/removeFav', {user: user, id: id});
	}

	listFav(id) {
		return this.http.get('http://localhost:8000/api/listFav/'+id);
	}

	listWtr(id) {
		return this.http.get('http://localhost:8000/api/listWtr/'+id);
	}

	commentRoute(uid, rid, rate, cmt) {
		return this.http.post('http://localhost:8000/api/commentRoute', {uid:uid, rid:rid, rate:rate, cmt:cmt});
	}

	isRated(uid, rid) {
		console.log(uid+' '+rid)
		return this.http.post('http://localhost:8000/api/isRated', {uid:uid, rid:rid});
	}

	getRouteLists() {
		return this.http.get('http://localhost:8000/api/getRouteLists');
	}

	setName(name, att) {
		return this.http.post('http://localhost:8000/api/setName', {name:name, att:att});
	}

	valPlace(id) {
		return this.http.post('http://localhost:8000/api/valPlace', {id:id});
	}

	delPlace(id) {
		return this.http.post('http://localhost:8000/api/delPlace', {id:id});
	}

	valEvent(id) {
		return this.http.post('http://localhost:8000/api/valEvent', {id:id});
	}

	delEvent(id) {
		return this.http.post('http://localhost:8000/api/delEvent', {id:id});
	}

	createRoute(route, date, user) {
		return this.http.post('http://localhost:8000/api/createRoute', {route:route, date:date, user:user});
	}

	editPlace(place,id) {
		return this.http.post('http://localhost:8000/api/editPlace', {place:place, id:id});
	}
	// editName(id, nname, name) {
	// 	return this.http.post('http://localhost:8000/api/editName/' , {id:id, name:name, nname:nname});
	// }
	// getNames(id) {
	// 	return this.http.get('http://localhost:8000/api/getNames/'+id);
	// }

}