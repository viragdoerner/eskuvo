import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import VenueContent from "../../content/VenueContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const FormBlock = lazy(() => import("../../components/FormBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const OtherBlock = lazy(() => import("../../components/OtherBlock"));
const VenueBlock = lazy(() => import("../../components/VenueBlock"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const TitleBlock = lazy(() => import("../../components/TitleBlock"));

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
      />
      <OtherBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <VenueBlock
        direction="right"
        title={VenueContent.title}
        content={VenueContent.text}
        id="venue"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <FormBlock
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </div>
  );
};

export default Home;
