import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                {/* Twitter DP: https://pbs.twimg.com/profile_images/482101504963117056/rFbRXQ-q_400x400.png */}
                  <Image src="https://avatars0.githubusercontent.com/u/9414893?v=3&s=466" thumbnail circle />
                </Col>
              </Row>
            </div>
        );
    }
}

export default Avatar;
