import { Row } from "react-bootstrap";
import PlayListTitle from "./PlayListTitle";
import PlayListCard from "./PlayListCard";
import { useEffect, useState } from "react";

interface Song {
  id: number;
  album: {
    cover_medium: string;
  };
  artist: {
    name: string;
  };
  title: string;
}

const NuoveUscite = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const url =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=tedua";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response Error " + response.status.toString());
        }
      })
      .then((data) => {
        setSongs(data.data.slice(0, 12));
      })
      .catch((err) => {
        console.log("Server error: " + err);
      });
  }, []);

  return (
    <>
      <PlayListTitle title="Nuove uscite" />
      <Row className="g-3 mt-0">
        {songs.map((song) => (
          <PlayListCard
            key={song.id}
            img={song.album.cover_medium}
            title={song.title}
            artist={song.artist.name}
          />
        ))}
      </Row>
    </>
  );
};

export default NuoveUscite;
