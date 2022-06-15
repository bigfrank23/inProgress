import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      {/* <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}
      <div className="featuredItem">
        <Link to={"/current-event-form"} className="links">
          <span className="featuredTitle">Current Event</span>
          <div className="text-center">
            <CloudUploadIcon className="featuredIcon"/>
          </div>
          <span className="featuredSub">Upload</span>
        </Link>
      </div>
      <div className="featuredItem">
      <Link to={"/news-feed-form"} className="links">
        <span className="featuredTitle">News Feed</span>
        <div className="text-center">
          <CloudUploadIcon className="featuredIcon"/>
        </div>
        <span className="featuredSub">Upload</span>
      </Link>
      </div>
      <div className="featuredItem">
        <a href="https://cloudinary.com/console/c-2d8472d228f7de5438d4e9634fa198/media_library/folders/c09f8242998920db06df37d3bdecfd3740" target="_blank" rel="noopener noreferrer">
          <span className="featuredTitle">Gallery</span>
          <div className="text-center">
            <CloudUploadIcon className="featuredIcon"/>
          </div>
          <span className="featuredSub">Upload</span>
        </a>
      </div>
      <div className="featuredItem">
      <Link to={"/upcoming-events-form"} className="links">
          <span className="featuredTitle">Upcoming Event</span>
          <div className="text-center">
            <CloudUploadIcon className="featuredIcon"/>
          </div>
          <span className="featuredSub">Upload</span>
        </Link>
      </div>
      <div className="featuredItem">
      <Link to={"/past-event-form"} className="links">
          <span className="featuredTitle">Past Event</span>
          <div className="text-center">
            <CloudUploadIcon className="featuredIcon"/>
          </div>
          <span className="featuredSub">Upload</span>
        </Link>
      </div>
      <div className="featuredItem">
      <Link to={"/blogs"} className="links">
          <span className="featuredTitle">Blog</span>
          <div className="text-center">
            <CreateIcon className="featuredIcon"/>
          </div>
          <span className="featuredSub">Create</span>
        </Link>
      </div>
      <div className="featuredItem">
      <Link to={"/chairman-messages-form"} className="links">
          <span className="featuredTitle">Chairman's Messages</span>
          <div className="text-center">
            <CreateIcon className="featuredIcon"/>
          </div>
          <span className="featuredSub">Create</span>
        </Link>
      </div>
    </div>
  );
}
