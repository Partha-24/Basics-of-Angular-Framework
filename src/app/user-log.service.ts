import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserLogService {
  LogMyDetail(userDetail: any) {
    console.log('User detail:', userDetail);
  }
}
