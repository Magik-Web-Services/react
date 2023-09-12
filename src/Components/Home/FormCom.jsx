import React from 'react';
import { useForm } from 'react-hook-form';

const FormCom = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => alert(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First Name" />
            <input {...register("lastName")} placeholder="Last Name" />
            <input {...register("email")} placeholder="Email" />
            <input type="submit" />
        </form>
    );
};

export default FormCom;
