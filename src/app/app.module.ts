import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { UserLogService } from './user-log.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
