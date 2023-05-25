interface PhotoProps {
  photos: Photo[]
}

interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
}
