import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>I'm sorry. The page you are trying to reach is not available</h2>
      <h3>Please go back to the <Link to = '/'>home page</Link> before anything bad happens to you...</h3>
      <h5>Or your cow.</h5>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
