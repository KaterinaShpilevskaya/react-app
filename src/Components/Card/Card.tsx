import classNames from "classnames";
import React, { FC } from "react";
import {
  BookMarkIcon,
  DislikeIcon,
  LikeIcon,
  MoreHorisontalIcon,
} from "../../Assets";

import { CardType } from "../../Constants/@types";
import styles from "./Card.module.css";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardProps = {
  card: CardType;
  size: CardSize;
};

const Card: FC<CardProps> = ({ card, size }) => {
  const { title, text, image, date } = card;

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  return (
    <div
      className={classNames(styles.container, {
        [styles.mediumContainer]: isMedium,
        // [styles.mediumContainer]: size === CardSize.Medium,
        [styles.smallContainer]: isSmall,
      })}
    >
      <div
        className={classNames(styles.bodyContainer, {
          [styles.mediumBodyContainer]: isMedium,
          [styles.smallBodyContainer]: isSmall,
        })}
      >
        <div className={styles.infoContainer}>
          <div className={styles.headerContainer}>
            <div>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.smallTitle]: !isLarge,
              })}
            >
              {title}
            </div>
          </div>
          {isLarge && <div className={styles.description}>{text}</div>}
        </div>
        <img
          src={image}
          alt={""}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <LikeIcon />
          </div>
          <div className={styles.iconButton}>
            <DislikeIcon />
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <BookMarkIcon />
          </div>
          <div className={styles.iconButton}>
            <MoreHorisontalIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
