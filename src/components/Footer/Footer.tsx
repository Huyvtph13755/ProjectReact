import React from "react";
import styled from "styled-components";
import Bank1 from "../../assets/images/1.png";
import Bank2 from "../../assets/images/2.png";
import Bank3 from "../../assets/images/3.png";
import Bank4 from "../../assets/images/4.png";
import Bank5 from "../../assets/images/5.png";
import Bank6 from "../../assets/images/6.png";

type Props = {};

const FooterPage = (props: Props) => {
  return (
    <ContainerrT>
      <Footer1>
        <div>
          <SpanFontsize1>Tìm cửa hàng</SpanFontsize1> <br />
          <SpanFontsize>Tìm cửa hàng gần nhất</SpanFontsize> <br />
          <SpanFontsize>Mua hàng từ xa</SpanFontsize> <br />
          <SpanClolor>
            Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
          </SpanClolor>
          <br />
          <SpanFontsize1>Phương thức thanh toán</SpanFontsize1>
          <br />
          <Image1>
            <Bank src={Bank1} style={{ width: "30px" }} />
            <Bank src={Bank2} />
            <Bank src={Bank3} />
            <Bank src={Bank4} />
          </Image1>
          <div>
            <Bank src={Bank5} />
          </div>
        </div>
        <div>
          <SpanFontsize>Gọi mua hàng: 1800.2044(8h00 - 22h00)</SpanFontsize>{" "}
          <br />
          <SpanFontsize>
            Gọi khiếu nại: 1800.2044(8h00 - 21h00)
          </SpanFontsize>{" "}
          <br />
          <SpanFontsize>
            Gọi bảo hành: 1800.2044(8h00 - 21h00)
          </SpanFontsize>{" "}
          <br />
          <SpanFontsize1>Đối tác dịch vụ bảo hành</SpanFontsize1> <br />
          <SpanFontsize>Điện Thoại - Máy tính</SpanFontsize> <br />
          <SpanFontsize1>Trung tâm bảo hành uỷ quyền Apple</SpanFontsize1>{" "}
          <br />
          <Bank src={Bank6} /> <br />
        </div>
        <div>
          <SpanFontsize>Mua hàng và thanh toán Online</SpanFontsize> <br />
          <SpanFontsize>Mua hàng trả góp Online</SpanFontsize> <br />
          <SpanFontsize>Tra thông tin đơn hàng</SpanFontsize> <br />
          <SpanFontsize>Tra điểm Smember</SpanFontsize> <br />
          <SpanFontsize>Tra thông tin bảo hành</SpanFontsize> <br />
          <SpanClolor2>Tra cứu hoá đơn VAT điện tử</SpanClolor2> <br />
          <SpanFontsize>Trung tâm bảo hành chính hãng</SpanFontsize> <br />
          <SpanFontsize>Quy định về việc sao lưu dữ liệu</SpanFontsize> <br />
          <SpanClolor>Dịch vụ bảo hành điện thoại</SpanClolor> <br />
          <br />
        </div>
        <div>
          <SpanFontsize>Quy chế hoạt động</SpanFontsize> <br />
          <SpanFontsize>Chính sách Bảo hành</SpanFontsize> <br />
          <SpanFontsize>Liên hệ hợp tác kinh doanh</SpanFontsize> <br />
          <SpanFontsize>Khách hàng doanh nghiệp (B2B)</SpanFontsize> <br />
          <SpanClolor>Ưu đãi thanh toán</SpanClolor> <br />
          <SpanFontsize>Tuyển dụng</SpanFontsize> <br />
          <br />
        </div>
      </Footer1>
      <Wrapper>
        <Container>
          <Coll>
            <CollT>
              <span>
                Điện thoại iPhone 13- Điện thoại iPhone 12 - Điện thoại iPhone
                11
              </span>{" "}
              <br />
              <span>
                Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
              </span>{" "}
              <br />
              <span>
                iPhone cũ giá rẻ: iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ
              </span>
            </CollT>
            <CollT>
              <span>
                Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A
              </span>{" "}
              <br />
              <span>
                Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện
                thoại Nokia
              </span>{" "}
              <br />
              <span>
                Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53
              </span>
            </CollT>
            <CollT>
              <span>Laptop - Laptop HP - Laptop Dell - Laptop Acer</span> <br />
              <span>Microsoft Surface - Laptop Lenovo - Laptop Asus</span>{" "}
              <br />
              <span>
                Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình
              </span>
            </CollT>
          </Coll>
          <SpanDoc>
            <SpanDocst>
              Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
              0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ:
              350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí
              Minh, Việt Nam. Điện thoại: 028.7108.9666.
            </SpanDocst>
          </SpanDoc>
        </Container>
      </Wrapper>
    </ContainerrT>
  );
};

const ContainerrT = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 50px;
`;
const SpanClolor = styled.span`
  color: red;
  font-size: 12px;
`;
const SpanClolor2 = styled.span`
  color: black;
  font-size: 12px;
`;
const SpanFontsize1 = styled.span`
  font-size: 16px;
  color: black;
`;
const SpanFontsize = styled.span`
  font-size: 12px;
`;
const Footer1 = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
`;
const Image1 = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
const Items = styled.div``;
const Bank = styled.img`
  padding-right: 5px;
`;
const Wrapper = styled.div`
  background-color: #f8f8f8;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  /* text-align: center; */
  margin-top: 20px;
`;
const Coll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CollT = styled.div`
  font-size: 10px;
  padding-top: 15px;
`;
const SpanDocst = styled.span`
  font-size: 10px;
`;
const SpanDoc = styled.div`
  text-align: center;
  /* align-items: center; */
  margin-top: 15px;
  margin-bottom: 15px;
`;
export default FooterPage;