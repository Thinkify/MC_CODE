import WithAuth from "@/component/common/WithAuth"
import { LoginCard } from "@/component/login/LoginCard"
import Head from 'next/head'
function Login() {
    return <>
        <Head>
            <title>Login</title>
        </Head>
        <LoginCard></LoginCard>
    </>
}


export default WithAuth(Login)