import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabdriverloginComponent } from './cabdriverlogin.component';

describe('CabdriverloginComponent', () => {
  let component: CabdriverloginComponent;
  let fixture: ComponentFixture<CabdriverloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabdriverloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabdriverloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
