import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKindOfQuestionComponent } from './list-kind-of-question.component';

describe('ListKindOfQuestionComponent', () => {
  let component: ListKindOfQuestionComponent;
  let fixture: ComponentFixture<ListKindOfQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKindOfQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKindOfQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
