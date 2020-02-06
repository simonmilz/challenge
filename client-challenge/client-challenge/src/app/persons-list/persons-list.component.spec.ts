import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PersonsListComponent } from './persons-list.component';

describe('PersonsListComponent', () => {
  let component: PersonsListComponent;
  let fixture: ComponentFixture<PersonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxDatatableModule, HttpClientTestingModule],
      declarations: [ PersonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
