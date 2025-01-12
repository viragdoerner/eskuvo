import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import VenueContent from "../../content/VenueContent.json";
import ContactContent from "../../content/ContactContent.json";

const FormBlock = lazy(() => import("../../components/FormBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const OtherBlock = lazy(() => import("../../components/OtherBlock"));
const VenueBlock = lazy(() => import("../../components/VenueBlock"));
const TitleBlock = lazy(() => import("../../components/TitleBlock"));
const GalleryBlock = lazy(() => import("../../components/GalleryBlock"));

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <TitleBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="cabodegata.jpg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="date"
      />
      <VenueBlock
        direction="left"
        title={VenueContent.title}
        content={VenueContent.text}
        id="venue"
      />

     <FormBlock
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
      <GalleryBlock/>
      <OtherBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="cabodegata.jpg"
        id="other"
      />
    </div>
  );
};

export default Home;
