/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/skinalyze.png';
import Veritru from '../../assets/recentprojects/calorify2.png';
import Lofo from '../../assets/recentprojects/bloomy.png';
import Startup from '../../assets/recentprojects/hoyochat.png';
import Lacalle from '../../assets/recentprojects/ecanteen.png';
import travelio from '../../assets/recentprojects/travellio.png';
import enfu from '../../assets/recentprojects/enfu.png';

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
      title: 'Skinalyze', 
      description: `Aplikasi analisis kulit berbasis AI yang mampu mendeteksi jerawat dan memberikan rekomendasi produk. Dirilis di App Store dan dibangun menggunakan SwiftUI, CoreML, dan HealthKit.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
      url: 'https://apps.apple.com/id/app/skinalyze/id6736903173',
    },
    { 
      id: 2,
      title: 'Calorify', 
      description: `Aplikasi penghitung kalori harian yang terintegrasi dengan HealthKit. Dibangun menggunakan MVVM dan WidgetKit.`,
      alter: 'VeriTru Project',
      image: `${Veritru}`,
      url: 'https://testflight.apple.com/join/QaFFaPzh',
    },
    { 
      id: 3,
      title: 'Bloomy - Blue Economy', 
      description: `Aplikasi berfokus pada pelestarian laut dan pemantauan kualitas air. Menggunakan model Machine Learning dengan TensorFlow Lite dan Google Maps API.`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
      url: 'https://github.com/Dynavx/bloomy',
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
      title: 'Travelio App', 
      description: `A mobile apps build with Flutter SDK, here we can find of destination we want to go, i want go to berlin btw! hehe.`,
      alter: 'Startup Project',
      image: `${travelio}`,
      url: 'https://github.com/Dynavx/Travellio-Flutter',
    },
    { 
      id: 6,
      title: 'Enfution Undip', 
      description: `Build and developed with ReactJS and Laravel
      with fancy design and Responsive in Desktop Or mobile.`,
      alter: 'React Portfolio',
      image: `${enfu}`,
      url: 'https://enfution15.com/',
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
