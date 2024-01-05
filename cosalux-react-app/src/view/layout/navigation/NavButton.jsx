import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavButton = styled.button``

const StyledNavLink = styled.a``

const NavButton = ({ title, url }) => {
  return (
    <StyledNavButton>
      <StyledNavLink href={url}>
        {title}
      </StyledNavLink>
    </StyledNavButton>
  );
};
NavButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavButton