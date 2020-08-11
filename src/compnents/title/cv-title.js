import React, { Component } from 'react';
import './cv-title.css';
import avatarImg from '../../assets/avatar.jpg';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';

class CvTitle extends Component {
  render() {
    return (
      <div className={'container'}>
        <Row justify={'center'}>
          <Col span={12}>
            <div className={'img'}>
              <img className={'avatar'} alt={'avatar'} src={avatarImg} />
            </div>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={12}>
            <h1 className={'line-1'}>HELLO,</h1>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={20}>
            <h1 className={'line-2'}>
              MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV
            </h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CvTitle;
