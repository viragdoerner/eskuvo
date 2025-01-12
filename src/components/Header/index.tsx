import { useState, useRef, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import i18n from "i18next";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const toggleMusic = (play?: boolean) => {
    if (!audioRef.current) return;
  
    const shouldPlay = play ?? !isPlaying;
  
    shouldPlay ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(shouldPlay);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("date")}>
          <Span>{t("Date")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("venue")}>
          <Span>{t("Venue")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("gallery")}>
          <Span>{t("Gallery")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("other")}>
          <Span>{t("Other")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("RSVP")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <HeaderSection>
      <Container>
        <audio ref={audioRef} src="/music.mp3" loop></audio>
        <Row justify="space-between" align="middle">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
         
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
          <LanguageSwitchContainer>
            <LanguageSwitch onClick={() => handleChange("en")}>
              <SvgIcon
                src="united-states.svg"
                aria-label="homepage"
                width="30px"
                height="30px"
              />
            </LanguageSwitch>
            <LanguageSwitch onClick={() => handleChange("hu")}>
              <SvgIcon
                src="hungary.svg"
                aria-label="homepage"
                width="30px"
                height="30px"
              />
            </LanguageSwitch>
          </LanguageSwitchContainer>
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={()=> toggleMusic()}>
            <SvgIcon
              src={isPlaying ? "pause.png" : "play.png"}
              width="20px"
              height="20px"
            />
          </div>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
