import React, { FC } from 'react';

import styles from "./CardsList.module.css";
import { CardsListType } from '../../Constants/@types';
import Card, { CardSize } from '../Card/Card';

type CardsListProps = {
    cardsList: CardsListType | null
}

const CardsList: FC<CardsListProps> = ({ cardsList }) => {

    return cardsList && cardsList.length > 0 ? 
    (
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Card card={cardsList[0]} size={CardSize.Large} />
          <div className={styles.mediumContainer}>
            {cardsList.map((card, index) => {
              if (index > 0 && index < 5) {
                return <Card key={index} card={card} size={CardSize.Medium} />;
              }
            })}
          </div>
        </div>
        <div className={styles.rightSide}>
          {cardsList.map((card, index) => {
            if (index > 5) {
              return <Card key={index} card={card} size={CardSize.Small} />;
            }
          })}
        </div>
      </div>
    ): null
  };

export default CardsList;