import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import CharacterPage from "../Pages/Charaters-Page/Characters"
import {characterProfiles} from "../Pages/Songs-Page/Characters"

import CharactersStyles from '../Styles/CharactersStyles'
import Bocchi from './Charaters-Page/Bocchi';
import Kita from './Charaters-Page/Kita';
import Ryo from './Charaters-Page/Ryo';
import Nijika from './Charaters-Page/Nijika';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
function Characters() {

  return (
    <CharactersStyles id='Characters'>
      <Swiper
        modules={[ EffectFade, Autoplay]}
        effect={'fade'}
        loop
        autoplay
        disableOnInteraction
        id = "Container"
    >
      {/* {characterProfiles.map((char, idx) => (
        <SwiperSlide key={idx}>
          <CharacterPage
            profile = {char.image}
            CharName = {char.CharName}
            description = {char.description}
            bg = {char.bg}
          />
        </SwiperSlide>
      ))}
       */}
      <SwiperSlide><Bocchi/></SwiperSlide>
      <SwiperSlide><Kita/></SwiperSlide>
      <SwiperSlide><Ryo/></SwiperSlide>
      <SwiperSlide><Nijika/></SwiperSlide>
    </Swiper>
    </CharactersStyles>
  )
}

export default Characters