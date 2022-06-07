import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, } from "@material-ui/icons";
import FeedIcon from '@mui/icons-material/Feed';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CreateIcon from '@mui/icons-material/Create';
import EventIcon from '@mui/icons-material/Event';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Actions</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FeedIcon className="sidebarIcon" />
              News Feed
            </li>
            <li className="sidebarListItem">
              <AnnouncementIcon className="sidebarIcon" />
              Announcement
            </li>
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon" />
              Events
            </li>
            <li className="sidebarListItem">
              <CreateIcon className="sidebarIcon" />
              Blogs
            </li>
          </ul> 
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Executives</h3>
          <ul className="sidebarList">
            <Link to="/pfnlagos-cwc" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  CWC
                </li>
              </Link>
            <Link to="/pfnlagos-directors" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Directors
                </li>
              </Link>
            <Link to="/pfnlagos-chairmen" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Chairmen
                </li>
              </Link>
              {/* <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link> */}
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
