import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">투자 정보</Footer.Link>
          <Footer.Link href="#">개인 정보</Footer.Link>
          <Footer.Link href="#">속도 테스트</Footer.Link>
          <Footer.Link href="#">넷플릭스 오리지널</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">고객 센터</Footer.Link>
          <Footer.Link href="#">입사 정보</Footer.Link>
          <Footer.Link href="#">쿠키 설정</Footer.Link>
          <Footer.Link href="#">법적 고지</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">계정</Footer.Link>
          <Footer.Link href="#">지원 디바이스</Footer.Link>
          <Footer.Link href="#">회사 정보</Footer.Link>
          <Footer.Link href="#">미디어 센터</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">이용 약관</Footer.Link>
          <Footer.Link href="#">문의하기</Footer.Link>
          <Footer.Link href="#">쿠키 정보</Footer.Link>
          <Footer.Link href="#">공지 사항</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>CPSJ 캡스톤디자인</Footer.Text>
    </Footer>
  );
}
