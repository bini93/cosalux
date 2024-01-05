import ContentWrapper from "../../components/ContentWrapper";
import GroupBox from "../../components/GroupBox";
import styled from "styled-components";

const StyledHeader= styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.secondary};
`

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 424px;

  background-color: ${props => props.theme.colors.backgroundDarkGray};
`

const StyledTitle = styled.h2``

const StyledInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 321px;

  background-color: ${props => props.theme.colors.backgroundBlack};
`
const StyledInfoGrid = styled.div`
  max-width: 1039px;
  padding: 40px;

  background-color: ${props => props.theme.colors.backgroundDarkGray};
`

const StyledInfoBox = styled.div``

const StyledInfoTitle = styled.h3``

const StyledInfoText = styled.p``

const StyledInfoQRWrapper = styled.div``

const StyledInfoQR = styled.div``

const StyledInfoButton = styled.a``


const Header = () => {
  return (
    <StyledHeader>
      <StyledHero>
        <ContentWrapper centered>
          <StyledTitle>DARING TO BE DIFFERENT.</StyledTitle>
        </ContentWrapper>
      </StyledHero>
      <StyledInfoWrapper>
        <ContentWrapper centered>
          <GroupBox>
            <StyledInfoGrid>
              <StyledInfoBox>
                <StyledInfoTitle>SAG HALLO! WIR FREUEN UNS AUF DEINE ANFRAGE!</StyledInfoTitle>
                <StyledInfoText>
                  Unser Horizont ist keine Linie, sondern 360 Grad – damit aus Projekten Welten werden
                  Wir wagen uns auf Wege, bevor sie existieren.
                  Durch VR/AR-App Programmierung, UX/UI-Design Projekten, innovative Konzepte und interaktive Ausstellungsdesigns
                  haben wir unsere Expertise für hochkarätige Kunden eingebracht.
                </StyledInfoText>
              </StyledInfoBox>
              <StyledInfoQRWrapper>
                <StyledInfoQR>
                </StyledInfoQR>
                <StyledInfoButton>Button Text</StyledInfoButton>
              </StyledInfoQRWrapper>
            </StyledInfoGrid>

          </GroupBox>
        </ContentWrapper>
      </StyledInfoWrapper>

    </StyledHeader>
  );
};

export default Header;

