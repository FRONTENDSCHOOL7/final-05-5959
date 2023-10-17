import React from 'react'
import { LinkButton, LinkButtonBox, Wrapper } from './LoginMainPage.style'
import { Logo, SmallLink, SubText } from 'components/_share/Share.style'
import logo from '../assets/img/logo_oguogu.png'
import kakao from '../assets/img/ico_kakao.png'
import kakao_click from '../assets/img/ico_kakao_click.png'
import facebook from '../assets/img/ico_facebook.png'
import facebook_click from '../assets/img/ico_facebook_click.png'
import google from '../assets/img/ico_google.png'
import google_click from '../assets/img/ico_google_click.png'
import oguogu from '../assets/img/ico_oguogu.png'
import oguogu_click from '../assets/img/ico_oguogu_click.png'

export default function LoginMainPage() {
    return (
        <Wrapper>
            <Logo src={logo}/>
            <SubText>내 새꾸 자랑, 네 새꾸 자랑</SubText>
            <LinkButtonBox>
                <LinkButton 
                color="#FFD555" 
                sns={kakao} 
                snsC={kakao_click}
                bgSize="18px">카카오톡 계정으로 로그인</LinkButton>
                <LinkButton color="#767676" sns={google}>구글 계정으로 로그인</LinkButton>
                <LinkButton color="#2D9CDB">페이스북 계정으로 로그인</LinkButton>
                <LinkButton to="/login" color="#FF6875">이메일로 로그인</LinkButton>
                <div>
                    <SmallLink to="/">비밀번호 찾기</SmallLink>
                    <SmallLink to="/join">회원가입</SmallLink>

                </div>
            </LinkButtonBox>
        </Wrapper>
    )
}
