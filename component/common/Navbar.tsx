import React, { FC } from 'react'
import styles from '../../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import router, { useRouter } from 'next/router';
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { logout } from '../../redux/slice/user.slice';
import { useDispatch } from 'react-redux';
const Navbar: FC = () => {
    const { data, status } = useAppSelector((state: RootState) => state.user);
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            const res = await dispatch(logout())
            if (!res.hasOwnProperty('error')) {
                router.push('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }
    const getLoggedInLink = () => {
        return <>
            <li><Link href="/"><a><span><FontAwesomeIcon icon={faHome} /></span>Home</a></Link></li>
            <li><Link href="#"><a onClick={handleLogout}><span><FontAwesomeIcon icon={faSignOutAlt} /></span>Logout</a></Link></li>
        </>
    }
    const getLoggedOutLink = () => {
        return <>
            <li><Link href="/"><a><span><FontAwesomeIcon icon={faHome} /></span>Home</a></Link></li>
            <li><Link href="/login"><a><span><FontAwesomeIcon icon={faSignInAlt} /></span>Login</a></Link></li>
            <li><Link href="/register"><a><span><FontAwesomeIcon icon={faUserPlus} /></span>Register</a></Link></li>
        </>
    }
    return <>
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}><span>logo</span></div>
            <div className="navbar-option">
                <ul className={styles.NavbarList}>
                    {
                        Object.keys(data).length > 0 ? getLoggedInLink() : getLoggedOutLink()
                    }
                </ul>
            </div>
        </div>
    </>
};

export { Navbar }