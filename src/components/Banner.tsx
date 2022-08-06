import { RightOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

import img1 from "../assets/images/dt.png";
import img2 from "../assets/images/laptop.png";
import img3 from "../assets/images/bang.png";
import img4 from "../assets/images/nghe.png";
import img5 from "../assets/images/dongho.png";
import img6 from "../assets/images/home.png";
import Banner2 from "../assets/images/banner.png";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Container>
      <div>
        <Img>
          <Icon>
            <div>
              <Image2 src={img1} />
            </div>
            <div>Điện Thoại</div>
          </Icon>
          <div>
            <RightOutlined />
          </div>
        </Img>
        {/* item 1 */}
        <Img>
          <Icon>
            <div>
              <Image3 src={img2} />
            </div>
            <div>LapTop</div>
          </Icon>
          <div>
            <RightOutlined />
          </div>
        </Img>
        {/* item 2 */}
        <Img>
          <Icon>
            <div>
              <Image3 src={img3} />
            </div>
            <div>Máy Tính Bảng</div>
          </Icon>
          <div>
            <RightOutlined />
          </div>
        </Img>
        {/* item 3 */}
        <Img>
          <Icon>
            <div>
              <Image3 src={img4} />
            </div>
            <div>Tai Nghe</div>
          </Icon>
          <div>
            <RightOutlined />
          </div>
        </Img>
        {/* item 4 */}
        <Img>
          <Icon>
            <div>
              <Image3 src={img5} />
            </div>
            <div>Đồng Hồ</div>
          </Icon>
          <div>
            <RightOutlined />
          </div>
        </Img>
        {/* item 5 */}
        <Img>
          <Icon>
            <div>
              <Image3 src={img6} />
            </div>
            <div>Nhà Thông Minh</div>
          </Icon>
          <div>
            <RightOutlined />
          </div>
        </Img>
      </div>
      {/* aaaaa */}
      <div>
        <Images src={Banner2} />
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  /* color: white; */
  grid-template-columns: 20% 1fr;
  gap: 15px;
  margin-top: 20px;
  /* padding-left: 25px; */
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Image2 = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image3 = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Images = styled.img`
  /* position: absolute; */
  width: 900px;
  height: 300px;
  margin-left: 20px;
`;

export default Banner;