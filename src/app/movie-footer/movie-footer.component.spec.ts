import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFooterComponent } from './movie-footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSlideToggleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieFooterComponent', () => {
  let component: MovieFooterComponent;
  let fixture: ComponentFixture<MovieFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFooterComponent ],
      imports:[
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
