import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesoadmPage } from './accesoadm.page';

describe('AccesoadmPage', () => {
  let component: AccesoadmPage;
  let fixture: ComponentFixture<AccesoadmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccesoadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
