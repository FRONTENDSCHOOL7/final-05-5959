import { FormTitle, FormWrapper, SmallLink } from 'components/_share/Share.style'
import LoginEmail from 'components/login/LoginEmail'
import React from 'react'

export default function LoginEmailPage() {
  return (
    <FormWrapper>
        <FormTitle>로그인</FormTitle>
        <LoginEmail />
        <SmallLink>이메일로 회원가입</SmallLink>
    </FormWrapper>
  )
}
