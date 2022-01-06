import React from 'react'
import { HomeIcon } from '../../component/common/HomeIcon';
import { LoginCard } from '../../component/login/LoginCard';
import Head from 'next/head';
import WithAuth from '../../component/common/WithAuth';
const Login = () => {
    return <>
        <Head>
            <title>Login</title>
        </Head>
        <HomeIcon />
        <LoginCard /></>
};
export default WithAuth(Login)