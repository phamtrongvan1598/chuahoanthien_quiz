import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGroupviewComponent } from './detail-groupview.component';

describe('DetailGroupviewComponent', () => {
  let component: DetailGroupviewComponent;
  let fixture: ComponentFixture<DetailGroupviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGroupviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGroupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
