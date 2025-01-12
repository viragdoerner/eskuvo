import { lazy } from "react";
import TitleContent from "../../content/TitleContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import OtherContent from "../../content/OtherContent.json";
import FormContent from "../../content/FormContent.json";

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
        title={TitleContent.title}
        content={TitleContent.text}
        button={TitleContent.button}
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
        id="venue"
      />

     <FormBlock
        title={FormContent.title}
        content={FormContent.text}
        id="contact"
      />
      <GalleryBlock/>
      <OtherBlock
        direction="left"
        title={OtherContent.title}
        content={OtherContent.text}
        section={OtherContent.section}
        icon="cabodegata.jpg"
        id="other"
      />
    </div>
  );
};

export default Home;
