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

  background-color: ${props => props.theme.colors.backgroundGray};
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
  display: flex;
  width: 100%;
  padding: 40px;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.backgroundDarkGray};
`

const StyledInfoBox = styled.div`
  max-width: 566px;
`

const StyledInfoTitle = styled.h3`
  margin-top: 0px;
`

const StyledInfoText = styled.p``

const StyledInfoQRWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const StyledInfoQR = styled.div``

const StyledInfoButton = styled.a`
  padding: 10px 90px;
  border: 1px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.backgroundDarkGray};
`


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
                <StyledInfoTitle>
                  SAG HALLO!
                  <br /> WIR FREUEN UNS AUF DEINE ANFRAGE!
                  </StyledInfoTitle>
                <StyledInfoText>
                  Unser Horizont ist keine Linie, sondern 360 Grad – damit aus Projekten Welten werden.
                  Wir wagen uns auf Wege, bevor sie existieren.
                  Durch VR/AR-App Programmierung, UX/UI-Design Projekten, innovative Konzepte und interaktive Ausstellungsdesigns
                  haben wir unsere Expertise für hochkarätige Kunden eingebracht.
                </StyledInfoText>
              </StyledInfoBox>

              <StyledInfoQRWrapper>
                <StyledInfoQR>
                  QR-CODE
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

