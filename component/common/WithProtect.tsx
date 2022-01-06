import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";

const WithProtect = (Component) => {
    return function Child(props) {
        const { data, status } = useAppSelector((state: RootState) => state.user);
        const router = useRouter()
        const [state, setState] = useState<JSX.Element | null>()
        useEffect(() => {
            if (Object.keys(data).length > 0) {
                setState(<Component {...props} />)
            }
            else {
                setState(null)
                router.push("/login");
            }
        }, [data]);
        return <>{state}</>
    }
};


export default WithProtect