import { useNavigate } from "react-router-dom";
import { useEffect, ChangeEvent } from "react"
import userDetail from "../db/userDetail";
import department from "../db/checkBok";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

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
interface Department {
    department: string;
    sub_departments: string[];
}

export default function SecPage() {
    const navigate = useNavigate()
    const user = localStorage.getItem("userDetail")
    useEffect(() => {
        if (user === null) {
            navigate("/")
        }
    }, [user])

    const handleToggle = (index: Number) => {
        const x = document.getElementById(`ui${index}`);
        const y = document.getElementById(`icon${index}`)
        const z = document.getElementById(`icon2${index}`)

        if (x && y && z) {
            if (x.style.display === "none") {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "block";


            } else {
                x.style.display = "none";
                y.style.display = "block";
                z.style.display = "none";
            }
        }
    };
    const checkboxChange = (
        e: ChangeEvent<HTMLInputElement>,
        department: Department,
        index: Number
    ) => {
        const isChecked = e.target.checked;
        const subCheckboxIds = department.sub_departments.map(
            (_, subIndex) => `subCheckBox${index}${subIndex}`
        );

        subCheckboxIds.forEach((subCheckboxId) => {
            const subCheckbox = document.getElementById(
                subCheckboxId
            ) as HTMLInputElement | null;

            if (subCheckbox) {
                subCheckbox.checked = isChecked;
            }
        });
    };

    const handlesubCheckBox = (
        index: Number,
        subDepartment: String[],

    ) => {
        const subCheckboxIds = subDepartment.map(
            (_, subIndex) => `subCheckBox${index}${subIndex}`
        );
        let flag = false;
        subCheckboxIds.forEach((subCheckboxId) => {
            const subCheckbox = document.getElementById(
                subCheckboxId
            ) as HTMLInputElement | null;

            if (!subCheckbox?.checked) {
                flag = true;
            }

        });
        if (!flag) {
            const x = document.getElementById(`checkBox${index}`) as HTMLInputElement
            x.checked = true;
        }
        else {
            const x = document.getElementById(`checkBox${index}`) as HTMLInputElement
            x.checked = false;
        }



    }

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
                        {department.departments.map((department, index) => (
                            <div key={index}>
                                <div style={{ display: 'flex' }}>
                                    <input id={`checkBox${index}`} type="checkbox"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {

                                            checkboxChange(e, department, index)

                                        }}
                                    />
                                    <h2>{department.department}</h2>
                                    <p
                                        id={`icon${index}`}
                                        style={{ display: "block", marginTop: "5px", fontSize: "20px" }}
                                        onClick={() => { handleToggle(index) }}
                                    >
                                        <IoMdArrowDropdown />
                                    </p>
                                    <p
                                        id={`icon2${index}`}
                                        style={{ display: "none", marginTop: "5px", fontSize: "20px" }}
                                        onClick={() => { handleToggle(index) }}
                                    >
                                        <IoMdArrowDropup />
                                    </p>

                                </div>

                                <div id={`ui${index}`} style={{ display: "none" }}>
                                    {department.sub_departments.map((subDepartment, subIndex) => (
                                        <>
                                            <div style={{ display: "flex", marginLeft: "25px" }}>
                                                <input id={`subCheckBox${index}${subIndex}`} type="checkbox" onChange={
                                                    () => {
                                                        handlesubCheckBox(index, department.sub_departments)
                                                    }

                                                } /> <p key={subIndex}> {subDepartment}</p>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
        </>
    );
}