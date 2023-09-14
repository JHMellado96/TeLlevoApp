import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenucliPage } from './menucli.page';

describe('MenucliPage', () => {
  let component: MenucliPage;
  let fixture: ComponentFixture<MenucliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenucliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
