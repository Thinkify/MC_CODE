import WithAuth from "@/component/common/WithAuth"
import { RegisterCard } from "@/component/register/RegisterCard"
import { FC } from "react"


function Register() {
    return <>
        <RegisterCard role="admin"></RegisterCard></>
}

export default WithAuth(Register)
