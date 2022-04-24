import LeftComponent from '../components/login_left'
import RightComponent from '../components/login_right'
import FooterComponent from '../components/login_footer'
import loginStyles from '../styles/loginStyles/Login.module.css'
import { NextPage } from 'next'
const loginPage :NextPage= () =>{
  return (
    <div>
      <main className={loginStyles.mainComponent}>
        <LeftComponent></LeftComponent>
        <RightComponent></RightComponent>
      </main>
      <footer className={loginStyles.footerComponent}>
        <FooterComponent></FooterComponent>
      </footer>
    </div>
  )
}

export default loginPage
