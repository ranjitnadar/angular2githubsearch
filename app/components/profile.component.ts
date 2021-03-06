import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
	moduleId:module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent { 
	user :any;
	repos : any;
	username:string;

	constructor(private _githubservice:GithubService){
		/*this._githubservice.getUser().subscribe( user => {
			console.log(user);
			this.user = user;
		})

		this._githubservice.getRepos().subscribe(repos => {
			this.repos = repos;
		})*/
		this.user = false;
	}


	searchUser(){
		this._githubservice.updateUser(this.username);
		//console.log(this.username);
		this._githubservice.getUser().subscribe( user => {
			//console.log(user);
			this.user = user;
		})

		this._githubservice.getRepos().subscribe(repos => {
			this.repos = repos;
		})
	}
}
