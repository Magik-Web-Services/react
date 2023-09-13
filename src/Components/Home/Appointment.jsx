import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useForm } from 'react-hook-form';
import { style, TextAreaStyle, btnStyle } from '../Styles/Style';
// import axios from "axios";

const Appointment = () => {
    const onSubmit = () => {

        const data = JSON.stringify({
            "1": "v",
            "3": "vkm",
            "4": "kjnjk",
            "5": "rw0t0kjnk",
            "7": "2023-09-13",
            "9": "kjn",
            "10": "flblvk n",
            "id": "12",
            "form_id": "3"
        });

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://localhost/wordpress/testing/wp-json/gf/v2/entries?form_id=1");
        xhr.setRequestHeader("Authorization", "OAuth oauth_consumer_key=\"ck_ff324975aee593f6cb5868e188ec8986214f66c5\", oauth_nonce=\"rI7ZwWReqhhcmJDg1KroLRHCk20rTB8X\", oauth_signature=\"KV44GDykE1UcMk%2B%2FI8zVVlLo4ww%3D\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"1694548150\", oauth_token=\"\", oauth_version=\"1.0\"");

        xhr.send(data);

        // const options = {
        //     method: 'POST',
        //     url: 'http://localhost/wordpress/testing/wp-json/gf/v2/entries',
        //     headers: {
        //         Authorization: 'OAuth oauth_consumer_key="ck_ff324975aee593f6cb5868e188ec8986214f66c5", oauth_nonce="whrojmJiByR5eydaMZk4W9jsaRyn7L5u", oauth_signature="fon1qFAolqfu3F%2BM8%2BXD3EjfHuU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1694545966", oauth_token="", oauth_version="1.0"'
        //     },
        //     data: {
        //             "1": "v",
        //             "3": "vkm",
        //             "4": "kjnjk",
        //             "5": "rw0t0kjnk",
        //             "7": "2023-09-13",
        //             "9": "kjn",
        //             "10": "flblvk n",
        //             "id": "12",
        //             "form_id": "3"
        //     }

        // data: {
        //     "1": {...data.firstName},
        //     "3": {...data.lastName},
        //     "4": {...data.email},
        //     "5": {...data.phone},
        //     "7": {...data.date},
        //     "9": {...data.Gender},
        //     "10": {...data.message},
        //     "id": "12",
        //     "form_id": "3"
        // }
    };

    // axios.request(options).then(function (response) {
    //     console.log(response);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    //  alert(JSON.stringify(data, null, 7))
// };


// Add css textField
const CssTextField = styled(TextField)(style.input);
// Add useForm
const { register, handleSubmit } = useForm();
// Add onSubmit func
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
