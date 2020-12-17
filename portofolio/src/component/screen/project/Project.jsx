import React, { useState } from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import "./Project.css";
import Modals from "../../reuseable/modal/Modal";

import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../reuseable/button/button";
import Card from "react-bootstrap/Card";

//videos
import VET_VIDEO from "../../assets/videos/TEAM A - VET.mp4";
import GLINTS21_VIDEO from "../../assets/videos/Glints21.mp4";

//images
import VET from "../../assets/images/project/Vet.jpg";
import GLINTS21 from "../../assets/images/project/Glints21.JPG";

// skills
import REACT from "../../assets/icons/React.svg";
import R_NATIVE from "../../assets/icons/React-Native.svg";
import GITLAB from "../../assets/icons/Gitlab.svg";
import POSTMAN from "../../assets/icons/Postman.svg";

function Project(props) {
  const [modal, setModal] = useState(false);
  const [video, setVideo] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="project-container" id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            // date="01/10/2020"
            className="text-center"
            text="VET"
            src={VET}
            alt="VET"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> VET is a pet health
                        services portal to connect pet owners and veterinary
                        clinics
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>VET app integrated with verified vet clinic</li>
                          <li>
                            Can reach out the clinic with our chat feature
                          </li>
                          <li>
                            Schedule Appointments with Veterinary and Clinic
                          </li>
                          <li>
                            Patient can search the nearest vet clinic, from
                            patient location
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={R_NATIVE}
                                alt="React Native"
                                rounded
                                className="image-style1"
                              />
                              React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={POSTMAN}
                                alt="POSTMAN"
                                rounded
                                className="image-style1"
                              ></Image>
                              Postman
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={GITLAB}
                                alt="Gitlab"
                                rounded
                                className="image-style1"
                              ></Image>
                              Gitlab
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="btn-container d-flex justify-content-around flex-nowrap text-center">
                <Button
                  press={() => console.log("test")}
                  name="Source Code"
                  link="https://gitlab.com/glintsxbinar_batch7-productclass/team-a-vet/team-reactnative"
                  target="_blank"
                />
                <Button
                  press={() => {
                    setVideo(VET_VIDEO);
                    setModal(true);
                    setName("VET");
                  }}
                  name="Watch Video"
                />
              </div>
            </div>
          </ImageEvent>

          {/* GLINTS21 */}

          <ImageEvent
            date="13/10/2020"
            className="text-center"
            text="Glints21"
            src={GLINTS21}
            alt="Glints21"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Glints21 is an app that
                        created for those who want to watch movie trailer before
                        they watch the actual movie
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login & Register</li>
                          <li>Search Movie</li>
                          <li>Movie Trailer</li>
                          <li>Movie Details</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={R_NATIVE}
                                alt="React Native"
                                rounded
                                className="image-style1"
                              />
                              React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={POSTMAN}
                                alt="POSTMAN"
                                rounded
                                className="image-style1"
                              ></Image>
                              Postman
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={GITLAB}
                                alt="Gitlab"
                                rounded
                                className="image-style1"
                              ></Image>
                              Gitlab
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="btn-container d-flex justify-content-around flex-nowrap text-center">
                <Button
                  press={() => console.log("test")}
                  name="Source Code"
                  link="https://gitlab.com/glintsxbinar_batch7-miniproject/team-b/teamb-reactnative/-/tree/develop"
                  target="_blank"
                />
                <Button
                  press={() => {
                    setVideo(GLINTS21_VIDEO);
                    setModal(true);
                    setName("Glints21");
                  }}
                  name="Watch Video"
                />
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
      <Modals
        name={name}
        Modal={modal}
        Video={video}
        close={() => setModal(false)}
      />
    </div>
  );
}

export default Project;
