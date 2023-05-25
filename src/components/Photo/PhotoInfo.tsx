interface PhotoProps {
  photo: {
    albumId: number,
    id: number,
    title: string,
    url: string,
  }
}

export const PhotoInfo = ({ photo }: PhotoProps) => {
  return (
    <tr>
      <td className="has-text-weight-bold">
        {photo.id}
      </td>

      <td>{photo.title}</td>
      <td>quidem molestiae enim</td>

      <td className="has-text-link">
        Max
      </td>
    </tr>
  );
};
