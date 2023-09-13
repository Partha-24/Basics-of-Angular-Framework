import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
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
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserErrorComponent } from './user-error/user-error.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'add-user', component: AddUserFormComponent  },
  { path: 'user', component: UserDetailComponent }, // User detail route
  { path: '', redirectTo: '/user-list', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    AddUserFormComponent,
    UserDetailComponent,
    UserErrorComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes),
  ],
  providers: [UserLogService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
