import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import userDetail from "../db/userDetail";
import department from "../db/checkBok";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
        field: 'userId',
        headerName: 'User Id',
        width: 100,
        editable: true,
    },
    {
        field: 'title',
        headerName: 'Title.',
        width: 350,
        editable: true,
    },
    {
        field: 'body',
        headerName: 'Body',
        width: 800,
        editable: true,
    }
];

const rows = userDetail;

export default function SecPage() {
    // const navigate = useNavigate()
    // const user = localStorage.getItem("user")
    // useEffect(() => {
    //     if (user == null) {
    //         navigate("/")
    //     }
    // }, [user])

    return (
        <>
            <Box sx={{ height: 370, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
            <Box sx={{
                height: 'auto',
                width: '250px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '20px',
            }}>

                <div className=" checkBox-main">
                    <div className="wrapper">
                        <div>
                            {department.departments.map((department, index) => (
                                <div key={index}>
                                    <h2>{department.department}</h2>
                                    <ul>
                                        {department.sub_departments.map((subDepartment, subIndex) => (
                                            <li key={subIndex}>{subDepartment}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>

            </Box>
        </>
    );
}