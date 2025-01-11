import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import background from "./spanyolfa.jpg";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ParallaxBanner
      layers={[{ image: background, speed: -15 }]}
      className="aspect-[2/1]"
    ><ContentSection>
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
            <h6 style={{ 
  color: "#ffffff"
}} >{t(title)}</h6>
            <Content style={{ 
  color: "#ffffff"
}} >{t(content)}</Content>
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
                            <MinTitle>{t(item.title)}</MinTitle>
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
