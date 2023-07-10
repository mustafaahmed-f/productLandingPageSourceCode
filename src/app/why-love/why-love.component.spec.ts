import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLoveComponent } from './why-love.component';

describe('WhyLoveComponent', () => {
  let component: WhyLoveComponent;
  let fixture: ComponentFixture<WhyLoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyLoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
