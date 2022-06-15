import React, { useState, useMemo, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import './MyGallery.css'
import { SRLWrapper } from "simple-react-lightbox";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { images } from './../../teamMembers/gallery';
import axios from "axios";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

let PageSize = 12;
const MyGallery = () => {
  const [cloudData, setCloudData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cloudData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const getCldImage = async () => {
    try {
        // const res = await axios.get("https://api.cloudinary.com/v1_1/pentecostal-fellowship-of-nigeria-lagos/resources/image", config)
        const res = await axios.get("http://res.cloudinary.com/pentecostal-fellowship-of-nigeria-lagos/image/list/pfnGalleryImages.json")
        console.log(res.data.resources);
        setCloudData(res.data.resources)
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  getCldImage()
}, []);

  return (
    <>
        <SRLWrapper>
          <CloudinaryContext cloudName="pentecostal-fellowship-of-nigeria-lagos" className="myGalleryContainer">
          {currentData?.map((data) => (
              <Image publicId={data.public_id} className="pics" style={{width: "200px", height: "200px"}}>
                  <Transformation
                        crop="scale"
                        // width="200"
                        // height="200"
                        dpr="auto"
                        responsive_placeholder="blank"
                    />
              </Image>
          ))}
          </CloudinaryContext>
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