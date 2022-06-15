import React, {useState, useEffect} from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "./Pagination.css";
import { Button } from "@mui/material";


const Pagination = (props) => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight, });
      // console.log(dimensions);
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight, });
      }
      useEffect(() => {
        window.addEventListener("resize", handleResize, false);
      }, []);
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className, } = props;
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize, });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    // window.scroll({top: 0, left: 0, behavior: "smooth"})
  };
  
  const onPrevious = () => {
    onPageChange(currentPage - 1);
    // window.scroll({top: 0, left: 0, behavior: "smooth"})
  };
  const onNextMobile = () => {
    onPageChange(currentPage + 1);
    window.scroll({top: 700, left: 0, behavior: "smooth"})
  };
  
  const onPreviousMobile = () => {
    onPageChange(currentPage - 1);
    window.scroll({top: 700, left: 0, behavior: "smooth"})
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <>
    {dimensions.width < 600 ? 
    <div className="d-flex gap-2">
       <Button variant="contained" size="small" color="secondary" className={classnames("mobile-pagination-item", { disabled: currentPage === 1, })} onClick={onPreviousMobile}> Prev </Button>
       <Button variant="contained" size="small" color="secondary" className={classnames("mobile-pagination-item", { disabled: currentPage === lastPage, })} onClick={onNextMobile}> Next </Button>
    </div> 
    : 
      <ul className={classnames("pagination-container", { [className]: className })} >
        <li className={classnames("pagination-item", { disabled: currentPage === 1, })} onClick={onPrevious} >
          {/* <i className="fa fa-chevron-left arrow left" aria-hidden="true" /> */}
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li className={classnames("pagination-item", { selected: pageNumber === currentPage, })} onClick={() => onPageChange(pageNumber)} >
              {pageNumber}
            </li>
          );
        })}
        <li className={classnames("pagination-item", { disabled: currentPage === lastPage, })} onClick={onNext} >
          <div className="arrow right" />
        </li>
      </ul>
    }
    </>
  );
};

export default Pagination;
