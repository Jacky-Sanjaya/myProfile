import React, { useState } from "react";
import "./modal.css";
import Modal from "react-bootstrap/Modal";
import VideoPlayer from "react-video-js-player";
import { ModalBody } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Modals(props) {
  const [modal, setModal] = useState(false);

  return (
    <Modal
      show={props.Modal}
      onHide={props.close}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Container>
          <Row>
            <VideoPlayer
              className="video-player"
              autoplay={true}
              src={props.Video}
            />
          </Row>
        </Container>
      </ModalBody>
    </Modal>
  );
}

export default Modals;
