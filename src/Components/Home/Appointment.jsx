import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useForm } from 'react-hook-form';
import { style, TextAreaStyle, btnStyle } from '../Styles/Style';

const Appointment = () => {
    // Add css textField
    const CssTextField = styled(TextField)(style.input);
    // Add useForm
    const { register, handleSubmit } = useForm();
    // Add onSubmit func
    const onSubmit = (data) => alert(JSON.stringify(data, null, 7));
    // register func
    const parseRegister = (name) => {
        const { ref, ...rest } = register(name);
        return { name, ref, ...rest };
    };

    return (
        <section className="text-gray-600 body-font bg-[#383f4d]">
            <div className="container mx-auto flex px-5 py-24 flex-row-reverse items-center">
                <div className="lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col items-center md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white text-3xl text-center font-medium title-font mb-3">SCHEDULE AN APPOINTMENT</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span style={{ display: "flex", gap: '10px', marginBottom: "10px" }}>
                            {/* firstName */}
                            <CssTextField required type="text" label="First Name" {...parseRegister("firstName")} />
                            {/* lastName */}
                            <CssTextField required type="text" label="Last Name" {...parseRegister("lastName")} />
                        </span>
                        <span style={{ display: "flex", gap: '10px', marginBottom: "10px" }}>
                            {/* Email */}
                            <CssTextField required type="email" label="Email" {...parseRegister("email")} />
                            {/* phone */}
                            <CssTextField required type="text" label="Phone" {...parseRegister("phone")} />
                        </span>
                        <span style={{ display: "flex", gap: '10px', marginBottom: "10px" }}>
                            {/* Date */}
                            <CssTextField required type="date" label="" {...parseRegister("date")} />
                            {/* select */}
                            <select style={style.select} {...parseRegister('Gender')}>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Child'>Child</option>
                            </select>
                        </span>
                        <TextAreaStyle required {...parseRegister("message")} minRows={3} placeholder="Message" />
                        <Stack direction="row">
                            <Button style={btnStyle} variant="contained" color='secondary' type="submit">Submit</Button>
                        </Stack>
                    </form>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="rounded-full object-cover object-center" alt="hero" src="https://dummyimage.com/400" />
                </div>
            </div>
        </section>
    )
}

export default Appointment;
