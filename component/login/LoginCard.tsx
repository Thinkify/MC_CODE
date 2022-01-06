import React, { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { login } from '../../redux/slice/user.slice'
import { useAppDispatch } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

type formData = {
    email: String;
    password: String;
}

const LoginCard: FC = () => {
    const { handleSubmit, watch, formState: { errors }, register } = useForm<formData>();
    const dispatch = useDispatch();
    const router = useRouter()

    const onSubmit = async (data) => {
        const user = await dispatch(login(data));
        if (!user.hasOwnProperty('error')) {
            router.push('/')
        }
    }
    return <>
        <div className="loginContainer">
            <div className="loginCard">
                <div className="loginLogo">
                    {/* <Image src="/public/images/" alt="logo" /> */}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="xyz@gmail.com" id="email" {...register("email", { required: true })} />
                        {errors.email && <span className="error-text">This field is required</span>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" placeholder="******" id="password" {...register("password", { required: true })} />
                        {errors.password && <span className="error-text">This field is required</span>}
                    </div>
                    <div className="d-flex justify-content-center ">
                        {/* <Button primary={true} text="Login" customClass="m-3" /> */}
                        <button className={`bg-gradient primary m-4`} type="submit">Login</button>
                    </div>
                    <div className="d-flex justify-content-center"><Link href="/register"><a>Dont have account?</a></Link></div>
                </form>
            </div>
        </div>
    </>
}

export { LoginCard }