import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
    name: string;
    phoneNo: string;
    email: string;
}

export default function FirstPage() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phoneNo: '',
        email: '',
    });

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {
                        m: 1,
                        width: '250px',
                        height: '50px',
                        display: 'flex',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '20px',
                    },
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, name: e.target.value });
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone No."
                    variant="outlined"
                    value={formData.phoneNo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, phoneNo: e.target.value });
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={formData.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, email: e.target.value });
                    }}
                />
                <Stack spacing={2} direction="row">
                    <Button style={{ width: '250px' }} variant="contained" onClick={() => {

                        if (!formData.name || !formData.email || !formData.phoneNo) {
                            window.alert("All fields are required ")
                        }
                        else {
                            localStorage.setItem("userDetail", JSON.stringify(formData));
                            navigate("/sec")
                        }
                    }}>
                        Submit
                    </Button>
                </Stack>
            </Box>
        </>
    );
}
