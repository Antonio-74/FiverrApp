import React from 'react';
import './Home.scss';
import { cards } from '../../data';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard';

function Home() {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home