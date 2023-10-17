import Splash from 'components/splash/Splash'
import React, { useEffect, useState } from 'react'
import GlobalStyle from 'style/Global.style'
import LoginMainPage from 'pages/LoginMainPage'
import AppRouter from 'router/AppRouter';

export default function App() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      //setLoading(false);
    },2500)
  })
  return (
    <>
    <GlobalStyle />
    <AppRouter />
    </>

  )
}
