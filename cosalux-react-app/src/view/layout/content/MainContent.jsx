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
  /* display: flex; */
  flex-grow: 1;
  margin: 50px 0;

  ${props => props.$colorPalette === "light" && `
    color: ${props.theme.colors.tertiary};
    background-color: ${props.theme.colors.backgroundLightGray};
  `}

  ${props => props.$colorPalette === "black" && `
    flex-wrap: wrap;
    justify-content: center;
    color: ${props.theme.colors.secondary};
    background-color: ${props.theme.colors.backgroundBlack};
  `}
`;

const StyledH2 = styled.h2`
  max-width: 850px;
`

const StyledTextBlock = styled.p`
  max-width: 850px;
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
                Wir transformieren „Zukunft” in Design und wissen, dass Digital ein anderes Wort für Emotion ist und Technologie für Neugier steht.
                Wir geben Produkten die Form zu sprechen und regen die Intelligenz zu interagieren an.
                Wir verstehen, dass Anders besser ist. <b>We are DARING TO BE DIFFERENT</b>.
                </StyledTextBlock>
          </StyledSection>
        </ContentWrapper>
      </StyledSectionWrapper>


      <StyledSectionWrapper>
        <ContentWrapper centered>
          <StyledSection $colorPalette="black">
            <StyledH2>ANLEITUNG</StyledH2>
            {/* <StyledTextBlock>Und hier ist der zweite Inhalt...</StyledTextBlock> */}
          </StyledSection>
        </ContentWrapper>
      </StyledSectionWrapper>



      <StyledSectionWrapper>
        <ContentWrapper>
          <StyledSection $colorPalette="light">
              <StyledH2>ÜBER UNS</StyledH2>
              <StyledTextBlock>
                <b>DARING TO BE DIFFERENT.</b>
                <br />
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