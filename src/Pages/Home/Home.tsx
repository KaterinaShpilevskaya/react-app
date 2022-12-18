import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsList from "../../Components/CardsList";
import { Tabslist } from "../../Components/TabsList";
import { Tabs } from "../../Constants/@types";
import { getPosts } from "../../Redux/Reducers/postsReducer";
import postsSelectors from "../../Redux/Selectors/postsSelectors";
import styles from "./Home.module.css";
import SelectedImageModal from "./SelectedImageModal";
import SelectedPostModal from "./SelectedPostModal";

const MOCK_CARDS_LIST = [
  {
    id: 0,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 1,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Yuri Alexeyevich Gagarin was born on the 9th of March, 1934. He was born in the village of Klushino in Smolensk region. ",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Yuri Alexeyevich Gagarin",
    author: 0,
  },
  {
    id: 2,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Yuri Gagarin attended an aeroclub and began to fly when he was a student of a technical secondary school in Saratov. In 1955 he entered a school for pilots. Then he became a pilot and joined the first group of cosmonauts. In 1960 Gagarin began to prepare for the flight into space. On April 12, 1961, Yuri Gagarin flew into space and spent 108 minutes there. It was the first time in history that the Russian spaceship Vostok with Man on board was in space. ",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Yuri Gagarin attended an aeroclub and began to fly when he was a student",
    author: 0,
  },
  {
    id: 3,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 4,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 5,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 6,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Gagarin became a Hero of our country. He died in 1968, but people always remember the first Russian cosmonaut.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Gagarin became a Hero of our country.",
    author: 0,
  },
  {
    id: 7,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 8,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 9,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 10,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 11,
    image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },

];

const Home = () => {
  const [activeTab, setActiveTab] = useState (Tabs.All);
  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

    const likedPosts = useSelector(postsSelectors.getLikedPosts);
    const savedPosts = useSelector(postsSelectors.getSavedPosts);

    const dispatch = useDispatch();
  const allPosts = useSelector(postsSelectors.getAllPosts);
  useEffect (() => {
    dispatch(getPosts ());
  }, []);

    const cardsArray = () => {
      if (activeTab === Tabs.Popular) {
          return likedPosts;
      } else if (activeTab === Tabs.Favorites) {
          return savedPosts;
      } else {
          return MOCK_CARDS_LIST;
          return allPosts;
      }
  };
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{"Blog"}</div>
      <Tabslist activeTab={activeTab} onSelectTab={onTabClick} />
      <CardsList cardsList={cardsArray()} />
      <SelectedPostModal />
      <SelectedImageModal />
    </div>
  );
};

export default Home;