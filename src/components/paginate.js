import React, { useState } from 'react';
import Pagination from './layout/Pagination';
import { getDisplayName } from '../utils/helpers';
import PropTypes from 'prop-types';

export default function withPaginate(Component, perPage = 30, sortLogic) {
  function WrappedComponent(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(perPage);
    const sorted = sortLogic(props.items, currentPage, itemsPerPage);
    console.log(sorted);

    return (
      <Component {...props} items={sorted.items}>
        <Pagination
          itemsPerPage={perPage}
          totalItems={sorted.totalItems}
          currentPage={currentPage}
          pageNeighbours={props.pageNeighbours}
          setCurrentPage={setCurrentPage}
        />
      </Component>
    );
  }
  WrappedComponent.defaultProps = {
    pageNeighbours: 2,
  };
  WrappedComponent.propType = {
    // max value is 2
    pageNeighbours: PropTypes.oneOf([0, 1, 2]),
  };
  // setting name for debugging
  WrappedComponent.displayName = `withLayout(${getDisplayName(Component)})`;
  return WrappedComponent;
}
