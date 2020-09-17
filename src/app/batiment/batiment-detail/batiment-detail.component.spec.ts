import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatimentDetailComponent } from './batiment-detail.component';

describe('BatimentDetailComponent', () => {
  let component: BatimentDetailComponent;
  let fixture: ComponentFixture<BatimentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatimentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatimentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
