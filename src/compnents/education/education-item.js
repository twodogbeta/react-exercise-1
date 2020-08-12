import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import './education-item.css';
import PropTypes from 'prop-types';

class EducationItem extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>
            <h3 className={'education-year'}>{this.props.data.year}</h3>
          </Col>
          <Col span={20} className={'education-container'}>
            <h3>{this.props.data.title}</h3>
            <p>{this.props.data.content}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

EducationItem.propTypes = {
  data: {
    year: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  },
};

export default EducationItem;
