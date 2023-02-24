import React from 'react';
import {Button, Empty} from 'antd';
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (

        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{height: 60}}
            description={
                <span>Oops ... Something went wrong. You can go back to the main</span>
            }
        >
            <Button type="primary" onClick={() => navigate('/')}>Back to main</Button>
        </Empty>
    )
}

export default ErrorPage;