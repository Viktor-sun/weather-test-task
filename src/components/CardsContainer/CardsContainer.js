import React from 'react';
import CardsItem from '../CardsItem';
import s from './CardsContainer.module.css';

export default function CardsContainer() {
  return (
    <div className={s.container}>
      <CardsItem />
    </div>
  );
}
