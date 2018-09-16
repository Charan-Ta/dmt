import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDeploymentsComponent } from './store-deployments.component';

describe('StoreDeploymentsComponent', () => {
  let component: StoreDeploymentsComponent;
  let fixture: ComponentFixture<StoreDeploymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDeploymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDeploymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
