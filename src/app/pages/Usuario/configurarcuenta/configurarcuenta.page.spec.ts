import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurarcuentaPage } from './configurarcuenta.page';

describe('ConfigurarcuentaPage', () => {
  let component: ConfigurarcuentaPage;
  let fixture: ComponentFixture<ConfigurarcuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarcuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
