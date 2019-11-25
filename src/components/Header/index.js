import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 36px;
  height: 60px;
  box-shadow: 0px 16px 7px -10px rgba(200, 203, 216, 0.26);
  border-bottom: 2px solid #eceef4;
  align-items: center;
`;

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
