import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedImageModalVisible } from "../../../Redux/Reducers/imageReducer";
import imageSelectors from "../../../Redux/Selectors/imageSelectors";
import styles from "./SelectedImageModal.module.css"

const SelectedImageModal = () => {

    const selectedImage = useSelector(imageSelectors.getSelectedImage)
    const isVisible = useSelector(imageSelectors.getSelectedImageModalVisible);

    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(setSelectedImageModalVisible(false))
    }

    return (
        <>
           {selectedImage && (
              <Modal isOpen={isVisible} onRequestClose={onClose}>
              <img src={selectedImage} alt={""} className={styles.selectedImage} />
              </Modal>
           )}
        </>
     );
     };

export default SelectedImageModal; 