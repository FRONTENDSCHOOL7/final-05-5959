import { Button, FormBox, Input, InputLabel } from 'components/_share/Share.style'
import React from 'react'

export default function LoginEmail() {
  return (
    <FormBox>
        <InputLabel>이메일
        <Input type='email' placeholder='이메일 주소를 입력해 주세요'/>
        </InputLabel>
        <InputLabel>비밀번호
        <Input type='password' placeholder='비밀번호를 입력해 주세요'/>
        </InputLabel>
        <Button>로그인</Button>
    </FormBox>
  )
}
