import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContentWrapper = styled.div`
  max-width: 1438px;
  display: flex;
  flex-grow: 1;

  ${({ $centered }) => $centered && `
    justify-content: center;
  `}
`

const ContentWrapper = ({ children, centered }) => {
  return (
    <StyledContentWrapper $centered={centered}>
      {children}
    </StyledContentWrapper>
  );
};
ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool
}

export default ContentWrapper;