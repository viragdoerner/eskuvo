import { Row, Col, Statistic } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
const { Countdown } = Statistic;

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const deadline = new Date('2025-06-08T14:00:00Z').getTime();

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <h6>
                <Countdown
                  value={deadline}
                  format="D nap HH:mm:ss"
                  className="h6 title"
                />
                </h6>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
            
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
