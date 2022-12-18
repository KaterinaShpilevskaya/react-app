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