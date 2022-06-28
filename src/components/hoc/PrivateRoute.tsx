import React, {FC} from 'react';
import { Navigate } from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface PropType {
    component: FC;
}

const PrivateRoute: FC<PropType> = ({component: Component}) => {
    const {user} = useTypedSelector(state => state.user)

    if (!user) {
        return <Navigate to='/login'/>
    }

    return <Component/>
};

export default PrivateRoute;