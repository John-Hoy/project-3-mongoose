import React from 'react';
import Anime, {anime} from 'react-anime';
import './style.css'
 
const Animation = (props) => (
  <Anime delay={anime.stagger(100)}
         scale={[0, 10]}>
    <div className="blue"/>
    <div className="green"/>
    <div className="red"/>
  </Anime>
);
 export default Animation;