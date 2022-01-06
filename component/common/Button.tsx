import React, { FC } from 'react';

interface buttonProps {
    text: string,
    primary?: boolean,
    secondary?: boolean,
    customClass?: string,
}



const Button: FC<buttonProps> = ({ primary, secondary, text, customClass }) => {
    return <><button className={`bg-gradient ${primary ? 'primary' : ''} ${secondary ? '' : ''} ${customClass} `}>{text}</button></>
}

export default Button