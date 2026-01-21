import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWiki } from './hero-wiki';

describe('HeroWiki', () => {
  let component: HeroWiki;
  let fixture: ComponentFixture<HeroWiki>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroWiki]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroWiki);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
