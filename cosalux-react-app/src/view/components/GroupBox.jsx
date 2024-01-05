import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGroupBox= styled.div`
  max-width: 1039px;
  display: flex;
  flex-grow: 1;
`

const GroupBox = ({ children }) => {
  return (
    <StyledGroupBox>
      {children}
    </StyledGroupBox>
  );
};
GroupBox.propTypes = {
  children: PropTypes.node.isRequired
}

export default GroupBox;