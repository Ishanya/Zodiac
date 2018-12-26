import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFooterComponent } from './home-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSlideToggleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeFooterComponent', () => {
  let component: HomeFooterComponent;
  let fixture: ComponentFixture<HomeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFooterComponent ],
      imports:[
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
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
    fixture = TestBed.createComponent(HomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
