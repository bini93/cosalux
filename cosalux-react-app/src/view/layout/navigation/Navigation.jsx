// import NavButton from './NavButton';
import ContentWrapper from '../../components/ContentWrapper';
import styled from 'styled-components';


const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height 104px;
  align-items: center;
  justify-content: center;
`
const StyleNavHeader = styled.div`
  width: 100%;
  display: flex;
`

const StyledPageTitle = styled.h1``

// const StyledNavList = styled.ul``


const Navigation = () => {
  return (
    <StyledNav>
      <ContentWrapper>
        <StyleNavHeader>
          <StyledPageTitle>Cosalux</StyledPageTitle>
        </StyleNavHeader>
          {/* <StyledNavList>
            <NavButton title="Abschnitt 1" url="#section1" />
            <NavButton title="Abschnitt 2" url="#section2" />
          </StyledNavList> */}
      </ContentWrapper>
    </StyledNav>
  )
}

export default Navigation;