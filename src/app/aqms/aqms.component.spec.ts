import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AQMSComponent } from './aqms.component';

describe('AQMSComponent', () => {
  let component: AQMSComponent;
  let fixture: ComponentFixture<AQMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AQMSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AQMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
