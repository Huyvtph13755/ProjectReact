import React from "react";
import styled from "styled-components";
// import styled from 'styled-components'
import LogoImage from "../../assets/images/logo.png";
import Search from "../Search/Search";
import s from "./Header.module.css";
import ImageLogo from "../../assets/images/vitri.png";
import ImageLogo2 from "../../assets/images/oto.png";
import ImageLogo3 from "../../assets/images/cart.png";
import { SearchOutlined } from "@ant-design/icons";

// import SeachI from '../Dassboard/SeachI'
type Props = {};

const Header = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Image src={LogoImage} />
        </div>
        <div className={s.content_btn}>
          {/* <Seach className={s.input}  > */}
          <Search />
          <SearchOutlined className={s.ic_seach} />
        </div>
        <Sdt>
          <div>Gói mua hàng</div>
          <div>18002097</div>
        </Sdt>
        <Vitri>
          <div>
            <Image2 src={ImageLogo} />
          </div>
          <div>
            Cửa hàng <br />
            gần bạn
          </div>
        </Vitri>

        <Vitri>
          <div>
            <Image3 src={ImageLogo2} />
          </div>
          <div>Tra cứu <br />đơn hàng</div>
        </Vitri>
        <Vitri>
          <div>
            <Image2 src={ImageLogo3} />
          </div>
          <div>Giỏ hàng</div>
        </Vitri>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #d70018;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;
const Image = styled.img`
  width: 65px;
  height: auto;
  margin-right: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image2 = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image3 = styled.img`
  width: 25px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Sdt = styled.div`
  font-size: 12px;
  color: white;
`;
const Vitri = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
