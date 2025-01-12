import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  NavLink,
  Extra,
  LogoContainer
} from "./styles";

const Footer = () => {

  return (
      <Extra>
        <Container>
          <Row
            justify="center"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <LogoContainer>
                <SvgIcon
                  src="sheepvirag.png"
                  aria-label="virag"
                  width="100%"
                  height="64px"
                />
              </LogoContainer>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>

            </NavLink>
             <LogoContainer>
                <SvgIcon
                  src="sheeptibi.png"
                  aria-label="tibi"
                  width="100%"
                  height="64px"
                />
              </LogoContainer>
            
          </Row>
        </Container>
      </Extra>
  );
};

export default withTranslation()(Footer);
