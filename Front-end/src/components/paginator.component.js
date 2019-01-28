import React, {Fragment} from "react";
import ReactPaginate from 'react-paginate';

const PaginatorComponent = (props) => {
  return (
    <Fragment>
      <div id="react-paginate">
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
      </div>
    </Fragment>
  );
};

export default PaginatorComponent;
