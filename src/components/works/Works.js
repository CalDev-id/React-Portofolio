/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/enfu.png';
import Veritru from '../../assets/recentprojects/eshop.png';
import Lofo from '../../assets/recentprojects/websekai.png';
import Startup from '../../assets/recentprojects/hoyochat.png';
import Lacalle from '../../assets/recentprojects/ecanteen.png';
import travelio from '../../assets/recentprojects/travellio.png';
import meta from '../../assets/recentprojects/meta.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Enfution Undip', 
      description: `Build and developed with ReactJS and Laravel
      with fancy design and Responsive in Desktop Or mobile.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
      url: 'https://enfution15.com/',
    },
    { 
      id: 2,
      title: 'Eshop APP', 
      description: `An Ecommerce shop application build using Flutter SDK, we can find something we need here.`,
      alter: 'VeriTru Project',
      image: `${Veritru}`,
      url: 'https://github.com/Dynavx/Eshop-Flutter',
    },
    { 
      id: 3,
      title: 'WebSekai', 
      description: `A Streaming video web application like Netflix, Build with ReactJS and Laravel framework, and also Mysql.`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
      url: 'https://github.com/Dynavx/Websekai-ReactLaravel',
    },
    { 
      id: 4,
      title: 'Ecanteen App', 
      description: `A mobile apps build with Flutter SDK, here we can find food we want to eats, do u like pizza? hehe.`,
      alter: 'Startup Project',
      image: `${Lacalle}`,
      url: 'https://github.com/Dynavx/Ecanteen-Flutter',
    },
    { 
      id: 5,
      title: 'HoyoChat', 
      description: `A Social Media Project, Build with ReactJS and Laravel with fancy design and responsive in dekstop or mobile.`,
      alter: 'Startup Project',
      image: `${Startup}`,
      url: 'https://github.com/Dynavx/HoyoChat-ReactLaravel',
    },

    { 
      id: 6,
      title: 'Travelio App', 
      description: `A mobile apps build with Flutter SDK, here we can find of destination we want to go, i want go to berlin btw! hehe.`,
      alter: 'Startup Project',
      image: `${travelio}`,
      url: 'https://github.com/Dynavx/Travellio-Flutter',
    },
    { 
      id: 7,
      title: 'Metaverse Web', 
      description: `A website information about metaverse, build with ReactJS.`,
      alter: 'Startup Project',
      image: `${meta}`,
      url: 'https://dynavx.github.io/Metaverse-ReactJS/',
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
              <a className="url" href={project.url}>Demo</a>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
