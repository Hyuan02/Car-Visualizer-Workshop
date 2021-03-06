import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityViewerComponent } from './unity-viewer.component';

describe('UnityViewerComponent', () => {
  let component: UnityViewerComponent;
  let fixture: ComponentFixture<UnityViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
