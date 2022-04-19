import React, { useState, useMemo } from "react";
import Pagination from "../pagination/Pagination";
import './MyGallery.css'
import CloseIcon from "@mui/icons-material/Close";
import { images } from './../../teamMembers/gallery';

let PageSize = 10;
const MyGallery = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return images.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const getImg = (img) => {
    setTempImg(img);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImg} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="myGalleryContainer">
        {currentData.map((data, i) => (
          <div className="pics" key={i} onClick={() => getImg(data.img)}>
            <img src={data.img} alt="" />
          </div>
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={images.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default MyGallery