import React from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import navbarCss from './navbar.module.css'
import utilsCss from "../styles/utils.module.css"

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user ? (
            <div className={navbarCss.wrapper}>
                {/* <h2>{user.name}</h2> */}
                <a className={utilsCss.paddingRight10px} href="/api/auth/me">{user.email}</a>
                <a className={utilsCss.paddingRight10px} href="/api/auth/logout">Logout</a>
                {/* <Image src={user.picture} alt={user.name} width="100" height="100"></Image> */}
            </div>
        ) :
            <div className={`${navbarCss.wrapper} ${utilsCss.paddingRight10px}`}><a href="/api/auth/login">Login</a></div>
    );
}