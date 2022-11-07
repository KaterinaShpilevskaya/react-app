import React from "react";

import CardsList from "../../Components/CardsList";
import { Tabslist } from "../../Components/TabsList";
import styles from "./Home.module.css";

const MOCK_CARD = {
  id: 0,
  image: "http://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "2021-12-12",
  lesson_num: 0,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  author: 0,
};

const MOCK_CARDS_LIST = [
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
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{"Blog"}</div>
      <Tabslist />
      <CardsList cardsList={MOCK_CARDS_LIST} />
    </div>
  );
};

export default Home;