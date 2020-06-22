import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  userName: string = '';
  response: any;

  constructor(private http: HttpClient) { }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
}
