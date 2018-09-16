import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFixturesComponent } from './store-fixtures.component';

describe('StoreFixturesComponent', () => {
  let component: StoreFixturesComponent;
  let fixture: ComponentFixture<StoreFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
