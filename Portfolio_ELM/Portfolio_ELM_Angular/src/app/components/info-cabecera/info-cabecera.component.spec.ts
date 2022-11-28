import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCabeceraComponent } from './info-cabecera.component';

describe('InfoCabeceraComponent', () => {
  let component: InfoCabeceraComponent;
  let fixture: ComponentFixture<InfoCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
