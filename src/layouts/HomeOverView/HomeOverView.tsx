import HeaderPage from '../../components/Header/Header'
import FooterPage from '../../components/Footer/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const HomeOverView = (props: Props) => {
  return (
    <div>
      <HeaderPage/>
      <Outlet/>
      <FooterPage/>
    </div>
  )
}

export default HomeOverView