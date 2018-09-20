import React from 'react';
import PropTypes from 'prop-types';

import Sort from './sort';
// import Clearfix from '../Clearfix';


const ShelfHeader = (props) => {
  console.log(props);

  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <Sort />
      {/* <Clearfix /> */}
    </div>
  );
}

// ShelfHeader.propTypes = {
//   productsLength: PropTypes.number.isRequired,
// }

export default ShelfHeader;