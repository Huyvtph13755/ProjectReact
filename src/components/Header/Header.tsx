import React from "react";
import styled from 'styled-components'
import LogoImage from '../../assets/images/logo.png'
import Search from "../Search/Search";
const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src={LogoImage} />
                <Search/>
            </Container>
        </Wrapper>
    )
}
const Logo = styled.img`
    width: 65px;
    height: auto;
    margin-right: 40px;
`

const Wrapper = styled.div`
    background-color: #D70018;
`

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`
export default Header