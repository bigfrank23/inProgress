import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { cwc } from "../../../../teamMembers/team";

export default function UserList() {
  const [data, setData] = useState(cwc);

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
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        // checkboxSelection
      />
    </div>
  );
}