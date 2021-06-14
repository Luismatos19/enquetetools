import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInfoPageComponent } from './question-info-page.component';

describe('QuestionInfoPageComponent', () => {
  let component: QuestionInfoPageComponent;
  let fixture: ComponentFixture<QuestionInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
