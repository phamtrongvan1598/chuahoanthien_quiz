import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKindOfQuestionComponent } from './edit-kind-of-question.component';

describe('EditKindOfQuestionComponent', () => {
  let component: EditKindOfQuestionComponent;
  let fixture: ComponentFixture<EditKindOfQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKindOfQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKindOfQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
