import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  Title,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";
import backgroundLarge from "./spanyolfa.jpg";
import backgroundSmall from "./spanyolfa-allitott.jpg";
import { useEffect, useState } from "react";

const ContentBlock = ({
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const [bgImage, setBgImage] = useState(backgroundLarge);

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(window.innerWidth <= 768 ? backgroundSmall : backgroundLarge);
    };
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, []);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ParallaxBanner
    layers={[
      { image: bgImage, speed: -20 }]}
    className="aspect-[2/1]"
  >
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <Title>{t(title)}</Title>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("contact")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <Title>{t(item.title)}</Title>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection></ParallaxBanner>
  );
};

export default withTranslation()(ContentBlock);
