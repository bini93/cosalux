import ContentWrapper from '../../components/ContentWrapper';
import styled from 'styled-components';


const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 104px;
  align-items: center;
  justify-content: center;
`
const StyleNavHeader = styled.div`
  width: 100%;
  display: flex;
`

const StyledPageTitle = styled.h1`
  color: ${props => props.theme.colors.titleColor};
`


const Navigation = () => {
  return (
    <StyledNav>
      <ContentWrapper>
        <StyleNavHeader>
          <StyledPageTitle>Cosalux</StyledPageTitle>
        </StyleNavHeader>

      </ContentWrapper>
    </StyledNav>
  )
}

export default Navigation;