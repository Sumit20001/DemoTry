import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcandidateComponent } from './regcandidate.component';

describe('RegcandidateComponent', () => {
  let component: RegcandidateComponent;
  let fixture: ComponentFixture<RegcandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegcandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
