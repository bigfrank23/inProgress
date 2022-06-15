import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import { chairmen } from "../../../../../teamMembers/team";
import '../userList.css'
import Footer from "../../../../../components/Footer/Footer";
import Topbar from "../../../adminComponents/topbar/Topbar";
import Sidebar from "../../../adminComponents/sidebar/Sidebar";
import BgImg from '../../../../../images/light-texture-bg.jpg'
import Img from '../../../../../images/splash2.jpg'
import { mobile } from "../../../../../responsive";



const Container = styled.div`
    background: url(${BgImg});
    /* margin-top: 10rem; */
    height: 100%;
    width: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    ${mobile({ marginTop: "1rem", padding: "2rem" })}
    .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img});
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 30vh;
    .page1Header {
      color: #fff;
      text-align: center;
      top: 25%;
    position: relative;
    }
  }
    `

export default function Charimen() {
  const [data, setData] = useState(chairmen);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "tel",
      headerName: "Phone Number",
      width: 220,
    },
    {
      field: "province",
      headerName: "Province",
      width: 220,
    },
    {
      field: "church",
      headerName: "Church",
      width: 220,
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  return (
        <Container>
        <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Chairmen</h1>
        </div>
      </div>
      <div className="adminHeroSectionContainer">
        <div className="adminTopBar">
            <Topbar />
        </div>
        <div className="adminMainBx">
            <div className="adminSidebar">
                <Sidebar />
            </div>
            <div className="adminMainContentBox">
            <div className="userList">
              <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                // checkboxSelection
              />
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
