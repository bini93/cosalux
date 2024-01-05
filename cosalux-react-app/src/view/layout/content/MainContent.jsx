import ContentWrapper from "../../components/ContentWrapper";
import styled from "styled-components";

const StyledSection = styled.section``;

const StyledWrapper = styled.div``

const StyledH2 = styled.h2``

const StyledTextBlock = styled.p``

const MyComponent = () => {
  return (
    <StyledWrapper>
      <StyledSection id="section1">
        <ContentWrapper>
          <StyledH2>Inhaltsbereich 1</StyledH2>
          <StyledTextBlock>Hier ist der erste Inhalt...</StyledTextBlock>
        </ContentWrapper>
      </StyledSection>

      <StyledSection id="section2">
        <ContentWrapper>
          <StyledH2>Inhaltsbereich 2</StyledH2>
          <StyledTextBlock>Und hier ist der zweite Inhalt...</StyledTextBlock>
        </ContentWrapper>
      </StyledSection>
    </StyledWrapper>
  );
};

export default MyComponent;