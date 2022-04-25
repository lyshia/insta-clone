import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullName }) => {
  console.log('props', username, fullName);
};

export default User;

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string
};
