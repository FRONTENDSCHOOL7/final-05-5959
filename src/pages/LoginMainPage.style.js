import { Link } from "react-router-dom"
import { styled } from "styled-components"
import logo from '../assets/img/logo_oguogu.png'
import kakao from '../assets/img/ico_kakao.png'
import kakao_click from '../assets/img/ico_kakao_click.png'
import facebook from '../assets/img/ico_facebook.png'
import facebook_click from '../assets/img/ico_facebook_click.png'
import google from '../assets/img/ico_google.png'
import google_click from '../assets/img/ico_google_click.png'
import oguogu from '../assets/img/ico_oguogu.png'
import oguogu_click from '../assets/img/ico_oguogu_click.png'

export const Wrapper = styled.div`
    width: 100%;
    background-color: var(--main-color-01);
    padding-top: 206px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LinkButton = styled(Link)`
    width: 100%;
    line-height: 44px;
    border-radius: 44px;
    border: 1px solid ${props => props.color};
    color: var(--gray-01);
    font-size: 14px;
    text-align: center;
    position: relative;

    &:active {
        color: var(--white);
        background-color: ${props => props.color};
    }

    &::after {
        content: "";
        position: absolute;
        display: block;
        width: 31px;
        height: 24px;
        top: 50%;
        left: 14px;
        transform: translateY(-50%);
        background: url(${props => props.sns}) no-repeat;
        background-size: ${props => props.bgSize || '24px'};
        background-position: center;
        
    }

    &:active+&::after {
        background: url(${props => props.snsC}) no-repeat;
    }
`;

export const LinkButtonBox = styled.div`
    width: 100%;
    padding: 50px 34px 45px 34px;
    background-color: var(--white);
    border-radius: 20px 20px 0 0;
    margin-top: 185px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;