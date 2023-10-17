import React from 'react'
import SongStyles from '../Styles/SongsStyles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

import Song1 from './Songs-Page/Song1';
import { songs } from './Songs-Page/Songs';

function Songs() {

  return (
    <SongStyles id='Songs'>
      <Swiper
        modules={[Autoplay,EffectFade]}
        effect='fade'
        autoplay
        loop
        id='Container'
        >
        {songs.map((song, idx) => (
          <SwiperSlide key={idx}>
            <Song1 
              name={song.SongName} 
              cover={song.albumCover} 
              song={song.song}
              AlbumBgStyle={song.albumBackGround}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SongStyles>
  )
}

export default Songs