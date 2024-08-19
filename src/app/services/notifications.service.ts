import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: string[] = [];

  add(notifications: string) {
    this.notifications.push(notifications);
  }

  clear() {
    this.notifications = [];
  }

}
