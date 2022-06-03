import React, { useState, useMemo } from "react";
import Pagination from "../pagination/Pagination";
import './MyGallery.css'
import CloseIcon from "@mui/icons-material/Close";
import { SRLWrapper } from "simple-react-lightbox";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { images } from './../../teamMembers/gallery';

let PageSize = 12;
const MyGallery = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return images.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImg} alt="" />
        <CloseIcon className="closeIcon" onClick={() => setModel(false)} />
        {/* {count < images.length - 1 && <ArrowForwardIosIcon className="nextArrow" onClick={() => setCount(count + 1)} />}
        {count > 0 &&  <ArrowBackIosNewIcon className="prevArrow" onClick={() => setCount(count - 1)} />} */}
      </div>
        <SRLWrapper>
          <div className="myGalleryContainer">
          {currentData.map((data, i) => (
              <div className="pics" key={i}>
                <img src={data.img} alt="" />
              </div>
          ))}
          </div>
        </SRLWrapper>
      <div className="d-flex justify-content-center">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={images.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
      </div>
    </>
  );
}

export default MyGallery