import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  getBookmarks() {
    return 'Bookmarks';
  }
}
