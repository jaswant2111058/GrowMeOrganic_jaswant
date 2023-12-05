import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import userDetail from "../db/userDetail";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'userId',
        headerName: 'User Id',
        width: 150,
        editable: true,
    },
    {
        field: 'title',
        headerName: 'Title.',
        width: 450,
        editable: true,
    },
    {
        field: 'body',
        headerName: 'Body',
        width: 650,
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
        <Box sx={{ height: 625, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[100]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}