import React from "react";
import { HomeIcon } from "../../component/common/HomeIcon";
import { RegisterCard } from "../../component/register/RegisterCard";
import Head from "next/head";
import WithAuth from '../../component/common/WithAuth';

const Register = () => {
    return <>
        <Head>
            <title>Register</title>
        </Head>
        <HomeIcon />
        <RegisterCard role="user" />
    </>
};



export default WithAuth(Register)