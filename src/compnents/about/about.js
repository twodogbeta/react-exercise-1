import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './about.css';
import { Col, Row } from 'antd';

class About extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6} offset={1}>
            <h1 className={'about'}>ABOUT ME</h1>
          </Col>
        </Row>
        <Row>
          <Col span={23} offset={1}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, non, dolorem, cumque distinctio magni quam expedita
              velit laborum sunt amet facere tempora ut fuga aliquam ad
              asperiores voluptatem dolorum! Quasi.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
