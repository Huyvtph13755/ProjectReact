import HeaderPage from '../../components/Header/Header'
import FooterPage from '../../components/Footer/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
type Props = {}

const HomeOverView = (props: Props) => {
  return (
    <div>
      <HeaderPage/>
      <Outlet/>
      <br /><br /><br />
      <FooterPage/>
    </div>
  )
}

export default HomeOverView