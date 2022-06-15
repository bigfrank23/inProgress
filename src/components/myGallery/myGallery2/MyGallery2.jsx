import React, { useState, useEffect } from "react";
import axios from 'axios'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';


const MyGallery2 = () => {
    const [cloudData, setCloudData] = useState([]);
    // const instance = axios.create()

    const config = {
        headers: {
            Authorization: `Basic ${("455712326831995" + ':' + "yMJr8QBuB1_kmkUnY4OkONPjr3Q")}`,
            "Content-Type"  : "application/json",
            "Access-Control-Allow-Origin": "*"
          }
      };

    //   const baseurl = "https://api.cloudinary.com/v1_1/pentecostal-fellowship-of-nigeria-lagos/resources/image";
  
    useEffect(() => {
        getCldImage()
    }, []);

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

    const handleClick = () => {
        getCldImage()
    }

  return (
    <>
    <div style={{marginTop: "50%"}}>
        <button onClick={handleClick}>click</button>
    </div>
    <CloudinaryContext cloudName="pentecostal-fellowship-of-nigeria-lagos">
    {
        cloudData.map(data => {
            return (
                <div className="responsive" key={data.public_id}>
                    <div className="img">
                        <a target="_blank" href={`https://res.cloudinary.com/pentecostal-fellowship-of-nigeria-lagos/image/upload/${data.public_id}.jpg`}>
                            <Image publicId={data.public_id}>
                                <Transformation
                                    crop="scale"
                                    width="300"
                                    height="200"
                                    dpr="auto"
                                    responsive_placeholder="blank"
                                />
                            </Image>
                        </a>
                        <div className="desc">Created at {data.created_at}</div>
                    </div>
                </div>
            )
        })
    }
    </CloudinaryContext>
    </>
  );
}

export default MyGallery2