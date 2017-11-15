import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class NoteService {

	constructor(private _http: Http) { }

	all(callback){
		this._http.get('/notes').subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

	create(data, callback){
		this._http.post('/notes', data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	}
}
