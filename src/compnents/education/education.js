import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './education.css';
import { Col, Row } from 'antd';
import EducationItem from './education-item';

class Education extends Component {
  render() {
    const educations = [
      {
        year: '1990',
        title: 'I was born in Katowice',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, ' +
          'exercitationem, totam, dolores iste dolore est aut modi.',
      },
      {
        year: '2005',
        title: 'Secondary school specializing in artistic',
        content:
          'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus ' +
          'quibusdam quis voluptatibus.',
      },
      {
        year: '2009',
        title: 'First level graduation in Graphic Design',
        content:
          'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat ' +
          'quibusdam perferendis? lusto, quibusdam asperiores unde \n' +
          'repel lat.',
      },
      {
        year: '2012',
        title: 'Second level graduation in Graphic Design',
        content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
      },
    ];
    return (
      <div>
        <Row>
          <Col span={6} offset={1}>
            <h1 className={'education'}>EDUCATION</h1>
          </Col>
        </Row>
        <Row>
          <Col span={22} offset={1}>
            <EducationItem data={educations[0]} key={1} />
          </Col>
          <Col span={22} offset={1}>
            <EducationItem data={educations[1]} key={2} />
          </Col>
          <Col span={22} offset={1}>
            <EducationItem data={educations[2]} key={3} />
          </Col>
          <Col span={22} offset={1}>
            <EducationItem data={educations[3]} key={4} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Education;
