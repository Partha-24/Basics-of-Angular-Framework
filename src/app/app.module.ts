import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { UserLogService } from './user-log.service';
import { UserDataService } from './user-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    AddUserFormComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [UserLogService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
