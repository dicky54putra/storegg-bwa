import React, { useCallback, useEffect, useState } from 'react';
import { getFeaturedGame } from '../../../services/player';
import GameItem from '../../molecules/GameItem';
import { GameItemTypes } from './FeaturedGametype';

export default function FeaturedGame() {
  const [gameLists, setGameLists] = useState<Array<object>>([]);
  const API_IMG = process.env.NEXT_PUBLIC_API_IMG;

  const getFeatureGameLists = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameLists(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameLists();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up">
          {gameLists.map((game: GameItemTypes) => (
            <GameItem
              key={game._id}
              title={`${game.name}`}
              category={`${game.category?.name}`}
              thumbnail={`${API_IMG}/${game.thumbnail}`}
              id={`${game._id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
