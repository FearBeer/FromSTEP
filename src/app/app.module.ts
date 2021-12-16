import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';

@NgModule({
  declarations: [		
    AppComponent,
      ProfileInfoComponent,
      ProfileContentComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
