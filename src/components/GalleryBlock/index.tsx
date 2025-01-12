import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import styled from "styled-components";

import photos from "./photos";

const Container = styled.div`
  background-color: #E9EED9;
  padding: 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media only screen and (max-width: 414px) {
    padding: 4rem 1rem;
  }
`;

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <Container id="gallery" className="gallery-container" >
      <RowsPhotoAlbum photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </Container>
  );
}
