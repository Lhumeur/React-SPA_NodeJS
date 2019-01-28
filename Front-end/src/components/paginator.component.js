import React, {Fragment} from "react";
import ReactPaginate from 'react-paginate';

const PaginatorComponent = (props) => {
  return (
    <Fragment>
      <div className="react-paginate">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'..'}
          breakClassName={'break-me'}
          pageCount={props.dataList.PAGES}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={props.setIndex}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        <div className="paginate__limit" onClick={props.setLimit}>
          <button className="limit-button" data-value="10">10</button>
          <button className="limit-button" data-value="25">25</button>
          <button className="limit-button" data-value="50">50</button>
          <button className="limit-button" data-value="100">100</button>
        </div>
      </div>
    </Fragment>
  );
};

export default PaginatorComponent;
