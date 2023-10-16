
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from "@angular/material/list";
import { CdkTableModule } from '@angular/cdk/table';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { MatRippleModule } from "@angular/material/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatAccordion, MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { MatSliderModule } from "@angular/material/slider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from "@angular/material/chips";
import { CdkStepper } from "@angular/cdk/stepper";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from "@angular/material/badge";
import { MatTableExtModule } from "mat-table-ext";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestScreen1Component } from './test-screen1/test-screen1.component';
import { MainScreenComponent } from "./components/MainScreen/MainScreen";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestScreen1Component,
    MainScreenComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTableModule,
    MatSortModule,
    MatRippleModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTabsModule,
    MatStepperModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    CdkTableModule,
    DragDropModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableExtModule,
    MatTreeModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
