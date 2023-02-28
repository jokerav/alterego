import React from 'react';
import {Button, Empty} from 'antd';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ErrorPage = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (

        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{height: 60}}
            description={
                <span>{t("Oops ... Something went wrong. You can go back to the main")}</span>
            }
        >
            <Button type="primary" onClick={() => navigate('/')}>{t("Back to main")}</Button>
        </Empty>
    )
}

export default ErrorPage;