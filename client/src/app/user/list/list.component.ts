import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  baseUrl: string = 'http://localhost:1337/api/persons';
  users: any[];
  faMapMarkedAlt = faMapMarkedAlt;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  ngOnInit(): void {
    this.getUsers()
      .subscribe(data => {
        this.users = data.data;

        $(document).ready(function () {
          $('[data-toggle="popover"]').popover();
        });
      });
  }

}
