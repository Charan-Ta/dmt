import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProgramDetailComponent } from './store-program-detail.component';

describe('StoreProgramDetailComponent', () => {
  let component: StoreProgramDetailComponent;
  let fixture: ComponentFixture<StoreProgramDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProgramDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProgramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
