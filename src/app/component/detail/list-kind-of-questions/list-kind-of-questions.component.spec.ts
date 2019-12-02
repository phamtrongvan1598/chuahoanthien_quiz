import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKindOfQuestionsComponent } from './list-kind-of-questions.component';

describe('ListKindOfQuestionsComponent', () => {
  let component: ListKindOfQuestionsComponent;
  let fixture: ComponentFixture<ListKindOfQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKindOfQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKindOfQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
