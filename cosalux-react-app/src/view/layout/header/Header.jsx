import ContentWrapper from "../../components/ContentWrapper";
import styled from "styled-components";

const StyledHeader= styled.header``

const StyledTitle= styled.h1``

const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <StyledTitle>Header Bereich</StyledTitle>
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;

