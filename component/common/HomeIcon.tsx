import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const HomeIcon = () => {
    return <>
        <div className="d-flex m-2" style={{ justifyContent: "start" }}>
            <Link href="/">
                <a>
                    <FontAwesomeIcon icon={faHome} size='3x' color="#539da3" />
                </a>
            </Link>
        </div>
    </>
};

export { HomeIcon }