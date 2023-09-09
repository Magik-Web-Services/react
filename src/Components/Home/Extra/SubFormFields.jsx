import React from 'react'
import { TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label': {
        color: '#9c9c9c',
    },
    '& MuiInputBase-input': {
        color: 'red',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#262b38',
        }
    },
});

const SubFormFields = (props) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <CssTextField className='border-[#262b38] text-[#9c9c9c]' type={props.firstFieldtype} label={props.firstField}  />
            <CssTextField className='border-[#262b38] text-[#9c9c9c]' type={props.secondFieldtype} label={props.secondField}/>
            {/* <CssTextField className='border-[#262b38] text-[#9c9c9c]' color='black' type={props.firstFieldtype} label={props.firstField} variant="outlined" /> */}
            {/* <CssTextField className='border-[#262b38] text-[#9c9c9c]' color='black' type={props.secondFieldtype} label={props.secondField} variant="outlined" /> */}
        </Box>
    )
}

export default SubFormFields
