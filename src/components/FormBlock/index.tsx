import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer } from "./styles";
import Container from "../../common/Container";

const Contact = ({ title, content, id}: ContactProps) => {

  return (
    <Container>
    <ContactContainer id={id}>
      <Row justify="space-between" align="top">
        <Col lg={10} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={14} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <iframe title="TibiEsVirag" src="https://docs.google.com/forms/d/e/1FAIpQLSeItkkjyXAjZoPeYMfEJVPApIxQu8oJ3A0k6NcNaEN_qc44qg/viewform?embedded=true"  style={{
            width: '100%',
            height: '87vh',
            border: 'none',
          }}>Loading…</iframe>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
    </Container>
  );
};

export default withTranslation()(Contact);
