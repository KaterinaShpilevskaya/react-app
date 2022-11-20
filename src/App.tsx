import React, { useEffect, useState } from 'react';
import './index.css';

//@ts-ignore
import styles from "./App.module.css";
import { CardType, Theme } from './Constants/@types';
import ThemeProvider from './Context/Theme/ThemeProvider';
import SignIn from './Pages/SignIn';

const App = () => {

    const [theme, setTeme] = useState(Theme.Dark)

    const onChangeTheme = () => {
      setTeme(theme === Theme.Light ? Theme.Dark : Theme.Light)
    }

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
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
  <div className={styles.container}>
    <SignIn />  
  </div>
  </ThemeProvider>
  )  
 }
 
 
export default App;
