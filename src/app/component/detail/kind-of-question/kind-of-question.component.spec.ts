import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindOfQuestionComponent } from './kind-of-question.component';

describe('KindOfQuestionComponent', () => {
  let component: KindOfQuestionComponent;
  let fixture: ComponentFixture<KindOfQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindOfQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindOfQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
