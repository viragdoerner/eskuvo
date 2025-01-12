import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { VenueBlockProps } from "./types";
import {
  ContentSection,
} from "./styles";

const VenueBlock = ({
  id,
  direction,
}: VenueBlockProps) => {

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <Row
          justify="space-between"
          align="middle"
          id={id}
        >
          <Col lg={24} md={24} sm={24} xs={24}>
            <iframe title="googleMaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.791380937383!2d21.932480476747255!3d47.6730686833847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474777576d8f6b71%3A0x19bcaa117a42e087!2sKrajc%C3%A1rhegyi%20Hunting%20House%20-%20NY%C3%8DRERD%C5%90%20ZRT.!5e1!3m2!1sen!2shu!4v1736627036754!5m2!1sen!2shu" 
            width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(VenueBlock);
