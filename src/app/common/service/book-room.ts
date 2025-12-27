import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookRoomService {

  public navigateToSpider():void {
      window.location.href = 'https://reservations.hotel-spider.com/03s692e6e5f856ca';
  }

}
