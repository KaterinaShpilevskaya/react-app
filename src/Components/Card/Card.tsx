import classNames from "classnames";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  BookMarkIcon,
  DislikeIcon,
  LikeIcon,
  MoreHorisontalIcon,
} from "../../Assets";

import { CardType } from "../../Constants/@types";
//@ts-ignore
import { setSelectedImage } from "../../Redux/Reducers/imageReducer";
import { setSelectedPost } from "../../Redux/Reducers/postsReducer";
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

  const dispatch = useDispatch();

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  const onSettingClick = () => {
    dispatch(setSelectedPost(card))
  }

  const onImageClick = () => {
    dispatch(setSelectedImage(image));
  };

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
          onClick={onImageClick}
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
          <div className={styles.iconButton} onClick={onSettingClick}>
            <MoreHorisontalIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
