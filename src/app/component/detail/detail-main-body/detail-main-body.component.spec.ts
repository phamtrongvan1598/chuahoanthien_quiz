import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMainBodyComponent } from './detail-main-body.component';

describe('DetailMainBodyComponent', () => {
  let component: DetailMainBodyComponent;
  let fixture: ComponentFixture<DetailMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
