import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import creative from "./2.png"
import red from "./3.png"
import volunteer from "./1.png"
import travel from "./4.png"
import doctor from "./5.png"

import "./projects-timeline.styles.css";

const TimeLine = () => {
  const projectDetails = [{
    img: creative,
    Name: 'Creative agency — Full-stack website',
    Features: 'A user can order a service. ',
    Features1: 'After the order is successfully placed he can see all his orders.',
    Features2: 'The user can also  leave a review which will show in the home page.',
    Features3: 'Admin can add a service which a normal user can order. ',
    Features4: 'Admin can also see all the users who have ordered something.',
    Features5: 'Admin can make another user admin by giving his email',
    Features6: '',
    tech1: 'react js',
    img1: L_REACT,
    tech2: 'Node js',
    img2: L_NODE_JS,
    tech3: 'Express',
    img3: L_EXPRESS,
    tech4: 'Mongodb',
    img4: L_MONGODB,
    tech5: 'Html 5',
    img5: L_HTML5,
    tech6: 'Css3',
    img6: L_CSS3,
    tech7: 'Bootsrap',
    img7: L_BOOTSTRAP4,
    LiveLink: 'https://assignment-11-r.web.app/',
    GithubLink: 'https://github.com/rewon123/assignment-11',
  },
  {
    img: red,
    Name: '',
    Features: '',
    Features1: '',
    Features2: '',
    Features3: '',
    Features4: '',
    Features5: '',
    Features6: '',
    tech1: 'react js',
    img1: L_REACT,
    tech2: 'React router',
    img2: 'https://cdn-media-1.freecodecamp.org/images/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png',
    tech3: 'github',
    img3: L_GIT,
    tech4: 'Firebase',
    img4: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png',
    tech5: 'Html 5',
    img5: L_HTML5,
    tech6: 'Css3',
    img6: L_CSS3,
    tech7: 'Bootsrap',
    img7: L_BOOTSTRAP4,
    LiveLink: '',
    GithubLink: '',
  },
  {
    img: volunteer,
    Name: '',
    Features: 'A user can register an event to participate in that event as a volunteer.',
    Features1: 'All the information will be saved in the database and it will also show all the registrations in the admin panel.',
    Features2: 'User can see all his registration after login and he/she can cancel the registration any time.',
    Features3: 'Admin can add an event which a user can register on that event. ',
    Features4: 'Admin can delete a specific users registration.',
    Features5: 'User will automatically log in if he/she had already logged in before.',
    Features6: '',
    tech1: 'react js',
    img1: L_REACT,
    tech2: 'Node js',
    img2: L_NODE_JS,
    tech3: 'Express',
    img3: L_EXPRESS,
    tech4: 'Mongodb',
    img4: L_MONGODB,
    tech5: 'Html 5',
    img5: L_HTML5,
    tech6: 'Css3',
    img6: L_CSS3,
    tech7: 'Bootsrap',
    img7: L_BOOTSTRAP4,
    LiveLink: 'https://assignment-10-volunteer-ecbf9.web.app/',
    GithubLink: 'https://github.com/rewon123/assignment-10',
  },
  {
    img: travel,
    Name: 'Travel Guru — Front end developed website',
    Features: 'User can select the destination where user wants to go',
    Features1: 'When user will click on booking it will take the user to booking details',
    Features2: 'Then it will take the user to the hotel page and then it will show available rooms with a map ',
    Features3: 'User will automatically log in if he/she had already logged in before.',
    Features4: '',
    Features5: '',
    Features6: '',
    tech1: 'react js',
    img1: L_REACT,
    tech2: '',
    img2: '',
    tech3: '',
    img3: '',
    tech4: 'Firebase',
    img4: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png',
    tech5: 'Html 5',
    img5: L_HTML5,
    tech6: 'Css3',
    img6: L_CSS3,
    tech7: 'Bootsrap',
    img7: L_BOOTSTRAP4,
    LiveLink: 'https://laughing-hypatia-78063c.netlify.app/',
    GithubLink: ' https://github.com/rewon123/assignment-9',
  },
  {
    img: doctor,
    Name: 'Travel Guru — Front end developed website',
    Features: 'A Single page web app with dashboard where people can pick the date and time and fix an appointment.',
    Features1: ' A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.',
    Features2: '',
    Features3: '',
    Features4: '',
    Features5: '',
    Features6: '',
    img1: L_REACT,
    tech2: 'Node js',
    img2: L_NODE_JS,
    tech3: 'Express',
    img3: L_EXPRESS,
    tech4: 'Mongodb',
    img4: L_MONGODB,
    tech5: 'Html 5',
    img5: L_HTML5,
    tech6: 'Css3',
    img6: L_CSS3,
    tech7: 'Bootsrap',
    img7: L_BOOTSTRAP4,
    LiveLink: 'https://doctors-portal-react.firebaseapp.com/',
    GithubLink: ' https://github.com/rewon123/assignment-9',
  },]
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Todo List With MUI */}
          {
            projectDetails.map(data => <ImageEvent
              className="text-center"
              text="Creative agency"
              src={data.img}
              alt="Creative agency"
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
                          {data.Name}
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            {data.Features == '' ? '' : <li> {data.Features} </li>}

                            {data.Features1 == '' ? '' : <li> {data.Features1} </li>}

                            {data.Features2 == '' ? '' : <li> {data.Features2} </li>}

                            {data.Features3 == '' ? '' : <li> {data.Features3} </li>}

                            {data.Features4 == '' ? '' : <li> {data.Features4} </li>}

                            {data.Features5 == '' ? '' : <li> {data.Features5} </li>}

                            {data.Features6 == '' ? '' : <li> {data.Features6} </li>}

                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={data.img1}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                {data.tech1}
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={data.img2}
                                  alt=""
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                {data.tech2}
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={data.img3}
                                  alt=""
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                {data.tech3}
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={data.img4}
                                  alt=""
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                {data.tech4}
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={data.img5}
                                  alt=""
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                {data.tech5}
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={data.img6}
                                  alt=""
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                {data.tech6}
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={data.img7}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                {data.tech7}
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href={data.LiveLink}
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                    href={data.GithubLink}
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                </div>
              </div>
            </ImageEvent>)
          }

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
