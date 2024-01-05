import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContentWrapper = styled.div`
  max-width: 1280px;
`

const ContentWrapper = ({ children }) => {
  return (
    <StyledContentWrapper>
      {children}
    </StyledContentWrapper>
  );
};
ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContentWrapper;