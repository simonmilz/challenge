import { PersonsListService } from './persons-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {
  persons: any;
  personsCount: number;
  columns: any;
  constructor(private personsListService: PersonsListService) { }

  ngOnInit() {
    this.getPersons();
  }
  getPersons() {
    this.personsListService.getPersons().subscribe((data) => {
      this.persons = data.data;
      this.personsCount = data.total;
      this.columns = [];
      let tempColumns = Object.keys(this.persons[0]);
      tempColumns = tempColumns.slice(1, tempColumns.length);
      tempColumns.forEach(element => {
        element = Object.assign({name: element});
        this.columns.push(element);
      });
      const tempPerson = [];
      this.persons.forEach(person => {
        const newfriendsArray = [];
        person.friends.forEach((value) => {
          const friends = Object.values(value);
          newfriendsArray.push(friends[1]);
        });
        person.friends = newfriendsArray;
        tempPerson.push(person);
      });
    });
  }
}
