import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesocliPage } from './accesocli.page';

describe('AccesocliPage', () => {
  let component: AccesocliPage;
  let fixture: ComponentFixture<AccesocliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccesocliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
