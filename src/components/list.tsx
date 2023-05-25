/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';

interface User {
  id: number,
  name: string,
  sex: string,
}

interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
}

interface Album {
  userId: number,
  id: number,
  title: string,
}

interface TypeProps {
  users: User[],
  photos: Photo[],
  albums: Album[],
}

export const PhotoList: React.FC<TypeProps> = (entries) => {
  const { users, photos, albums } = entries;

  return (
    <tbody>
      {photos.map((photo) => {
        const { id, title } = photo;
        //   Here i have to find album and user of photo,
        //   and make class name dapending of user sex, but no time ;-;

        return (
          <tr>
            <td className="has-text-weight-bold">
              {id}
            </td>

            <td>{title}</td>
            <td>quidem molestiae enim</td>

            <td>
              Max
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
