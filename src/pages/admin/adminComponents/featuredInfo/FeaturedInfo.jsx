import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
        <span className="featuredTitle">Current Event</span>
        <div className="text-center">
          <CloudUploadIcon className="featuredIcon"/>
        </div>
        <span className="featuredSub">Upload</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">News Feed</span>
        <div className="text-center">
          <CloudUploadIcon className="featuredIcon"/>
        </div>
        <span className="featuredSub">Upload</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Gallery</span>
        <div className="text-center">
          <CloudUploadIcon className="featuredIcon"/>
        </div>
        <span className="featuredSub">Upload</span>
      </div>
    </div>
  );
}
