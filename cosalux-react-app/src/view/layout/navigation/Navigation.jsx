import NavButton from './NavButton';
import ContentWrapper from '../../components/ContentWrapper';
import styled from 'styled-components';


const StyledNav = styled.nav``

const StyledNavList = styled.ul``


const Navigation = () => {
  return (
    <StyledNav>
      <ContentWrapper>
          <StyledNavList>
            <NavButton title="Abschnitt 1" url="#section1" />
            <NavButton title="Abschnitt 2" url="#section2" />
          </StyledNavList>
      </ContentWrapper>
    </StyledNav>
  )
}

export default Navigation;