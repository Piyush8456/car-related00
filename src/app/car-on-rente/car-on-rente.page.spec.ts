import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarOnRentePage } from './car-on-rente.page';

describe('CarOnRentePage', () => {
  let component: CarOnRentePage;
  let fixture: ComponentFixture<CarOnRentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarOnRentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
