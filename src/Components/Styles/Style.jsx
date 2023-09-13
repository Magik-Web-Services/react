import { styled } from "@mui/material/styles";
import {TextareaAutosize} from '@mui/material';

// Css
export const style = {
    select: {
        width: '25ch',
        padding: "10px",
        backgroundColor: "#414a5b",
        color: '#9c9c9c',
        borderColor: '#262b38',
        '&.MuiFocused .MuiOutlinedInputNotchedOutline': {
            borderColor: '#262b38',
        }
    },
    input: {
        width: '25ch',
        backgroundColor: "#414a5b",
        '& label': {
            color: '#9c9c9c', // Text Color
        },
        '& label.Mui-focused': {
            color: '#9c9c9c', // text active color
        },
        '& input': {
            color: '#9c9c9c', // Date Color
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#262b38', // Border Color
            },
            '&:hover fieldset': {
                borderColor: '#262b38', // Border Hover Color
            },
            '&.Mui-focused fieldset': {
                borderColor: '#262b38', // Border active  color
            },
        }
    }
}

export const TextAreaStyle = styled(TextareaAutosize)(
    {
        backgroundColor: "#414a5b",
        width: "51ch",
        border: `1px solid #262b38`,
        padding: '10px',
        color: '#9c9c9c',
        borderRadius: '10px',
        "&:hover": {
            border: `1px solid #262b38`
        },
        "&:focus": {
            border: `1px solid #262b38`,
            outline: "none"
        }
    }
);

export const btnStyle = {
    padding: '7px 35px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '20ch',
    marginTop: "20px",
    borderRadius: '30px',
    marginLeft: "10px"
}


