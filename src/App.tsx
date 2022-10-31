import React, { useEffect, useState } from 'react';
import './index.css';

//@ts-ignore
import styles from "./App.module.css";
import CardsList from './Components/CardsList';
import { CardType } from './Constants/@types';

const App = () => {

  const MOCK_CARD ={
    id: 0,
    image: "https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg",
    text: "Тут будет какое-то описание поста",
    date: "2022-10-30",
    lesson_num: 0,
    title: "А вот тут будет заголовок",
    author: 0,
  }
  
  const MOCK_CARDS_LIST= [
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
  ];
  
  const [cardsList, setCardsList] = useState<CardType[] | null>(null);;

  useEffect(() => {
    setCardsList(MOCK_CARDS_LIST);
  }, []);

  return(
  <div className={styles.container}>
    <CardsList cardsList={cardsList} />  
  </div>
  ) 
    
 }

export default App;
