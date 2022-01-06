import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { verifyToken } from '../../redux/slice/user.slice';
import { RootState } from '../../redux/store'
import { getToken } from '../../utils/tokenHelper';

const UserProvider: FC = ({ children }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { data, status } = useAppSelector((state: RootState) => state.user)

    useEffect(() => {
        const check = async () => {
            if (Object.keys(data).length <= 0) {
                const response = await dispatch(verifyToken(getToken()));
                console.log("response", response)
                if (response.hasOwnProperty('error')) {
                    router.push('/login')
                }
            }
        }
        check()
    }, [])
    return <>
        {children}
    </>
}

export default UserProvider