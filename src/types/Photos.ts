import { Albums } from './Albums';
import { Users } from './Users';

export interface Photos {
  albumId: number,
  id: number,
  title: string,
  url: string,
}

export interface AlbumPhoto extends Photos {
  album ?: Albums,
  user ?: Users,

}
