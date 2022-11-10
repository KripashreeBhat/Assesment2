import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DatetimePipe } from './datetime.pipe';
import { FavComponent } from './fav/fav.component';
import { FooterComponent } from './footer/footer.component';
import { DialogremoveComponent } from './dialogremove/dialogremove.component';
import { RecentsearchComponent } from './recentsearch/recentsearch.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    HomeComponent,
    DatetimePipe,
    FavComponent,
    FooterComponent,
    DialogremoveComponent,
    RecentsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
