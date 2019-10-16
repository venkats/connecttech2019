import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],      
      declarations: [
        AppComponent
      ],
      imports: [
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'books'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('books');
  });
  
  it('should render books', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const content = fixture.debugElement.nativeElement;
    expect(content.querySelector('books')).not.toBeUndefined();
  });
});
