import React from 'react'
import { Wrapper } from './Splash.style'
import { Logo, SubText } from '../_share/Share.style'
import logo from '../../assets/img/logo_oguogu.png'


export default function Splash() {
  return (
    <Wrapper>
      <Logo src={logo}/>
      <SubText>내 새꾸 자랑, 네 새꾸 자랑</SubText>
    </Wrapper>
  )
}
