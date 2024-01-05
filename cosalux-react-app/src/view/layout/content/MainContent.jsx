import ContentWrapper from "../../components/ContentWrapper";
import styled from "styled-components";

const StyledMainContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.tertiary};
  background-color: ${props => props.theme.colors.backgroundLightGray};

  flex-wrap: wrap;
  padding: 50px 0;
`

const StyledSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`

const StyledSection = styled.div`
  flex-grow: 1;
  margin: 50px 0;

  ${props => props.$colorPalette === "light" && `
    color: ${props.theme.colors.tertiary};
    background-color: ${props.theme.colors.backgroundLightGray};
  `}

  ${props => props.$colorPalette === "black" && `
    flex-grow: 1;
    margin: 50px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 60px 0;

    color: ${props.theme.colors.secondary};
    background-color: ${props.theme.colors.backgroundBlack};
  `}
`;

const StyledH2 = styled.h2`
  max-width: 850px;
`

const StyledTextBlock = styled.p`
  max-width: 850px;
  margin-bottom: 20px;
`

const StyledStepWrapper = styled.div`
  display: flex;
  column-gap: 100px;
`

const StyledStep = styled.div`
  display: flex;
  flex: 1 1 0px;
`
const StyledStepNumber = styled.div`
  font-size: 90px;
  margin-right: 45px;
`
const StyledStepInfoWrapper = styled.div`
  display: flex;
`

const StyledStepInfo = styled.div`
  display: flex;
  font-size: 18px;
  max-width: 200px;
  padding-top: 15px;
`

const StyledStepArrow = styled.div`
  display: flex;
`

const MainContent = () => {
  return (
    <StyledMainContentWrapper>
      <StyledSectionWrapper>
        <ContentWrapper>
          <StyledSection $colorPalette="light">
              <StyledH2>AGENTUR FÜR DIGITALE KOMMUNIKATION UND DESIGN</StyledH2>
              <StyledTextBlock>
                COSALUX ist eine inhabergeführte Agentur für digitale Kommunikation und Design.
                Seit 2009 konzipieren und entwickeln wir aus Leidenschaft kreative und innovative Lösungen für unterschiedliche Branchen und Industrien.
              </StyledTextBlock>
              <StyledTextBlock>
                Wir transformieren „Zukunft” in Design und wissen, dass Digital ein anderes Wort für Emotion ist und Technologie für Neugier steht.
                Wir geben Produkten die Form zu sprechen und regen die Intelligenz zu interagieren an.
                Wir verstehen, dass Anders besser ist.
              </StyledTextBlock>
              <StyledTextBlock>
                We are <b>DARING TO BE DIFFERENT</b>.
              </StyledTextBlock>
          </StyledSection>
        </ContentWrapper>
      </StyledSectionWrapper>


      <StyledSectionWrapper>
        <ContentWrapper centered>
          <StyledSection $colorPalette="black">

            <StyledH2>ANLEITUNG</StyledH2>
            <StyledStepWrapper>

              <StyledStep>
                <StyledStepNumber>1</StyledStepNumber>
                <StyledStepInfoWrapper>
                  <StyledStepInfo>QR -Code scannen oder Link klicken.</StyledStepInfo>
                  <StyledStepArrow></StyledStepArrow>
                </StyledStepInfoWrapper>
              </StyledStep>
              <StyledStep>
                <StyledStepNumber>2</StyledStepNumber>
                <StyledStepInfoWrapper>
                  <StyledStepInfo>WhatsApp öffnet sich</StyledStepInfo>
                  <StyledStepArrow></StyledStepArrow>
                </StyledStepInfoWrapper>
              </StyledStep>
              <StyledStep>
                <StyledStepNumber>3</StyledStepNumber>
                <StyledStepInfoWrapper>
                  <StyledStepInfo>Nachricht abschicken.</StyledStepInfo>
                  <StyledStepArrow></StyledStepArrow>
                </StyledStepInfoWrapper>
              </StyledStep>

            </StyledStepWrapper>

          </StyledSection>
        </ContentWrapper>
      </StyledSectionWrapper>



      <StyledSectionWrapper>
        <ContentWrapper>
          <StyledSection $colorPalette="light">
              <StyledH2>ÜBER UNS</StyledH2>
              <StyledTextBlock>
                <b>DARING TO BE DIFFERENT</b>.
              </StyledTextBlock>
              <StyledTextBlock>
                Das ist, woran wir glauben.
                Das ist was uns antreibt.
                Wir stechen heraus. Wir sind immer in Bewegung.
                Mit der Zeit und gegen den Strom. Wir glauben daran, dass Grenzen zum Überschreiten existieren. Wir denken, dass Mut und Herz neue Welten schaffen.
                Wir wissen, dass die Zukunft durch Träume geformt wird.
                Wir hoffen, etwas Bedeutendes zu hinterlassen.
              </StyledTextBlock>
          </StyledSection>
        </ContentWrapper>
      </StyledSectionWrapper>

    </StyledMainContentWrapper>
  );
};

export default MainContent;