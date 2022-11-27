import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../Components/Card";
import { CardSize } from "../../../Components/Card/Card";
import { setSelectedPostModalVisible } from "../../../Redux/Reducers/postsReducer";
import postsSelectors from "../../../Redux/Selectors/postsSelectors";

const SelectedPostModal = () => {

    const selectedPost = useSelector(postsSelectors.getSelectedPost)

    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(setSelectedPostModalVisible(false))
    }

    return (
        selectedPost && (
    <Modal isOpen={true} onRequestClose={onClose} >
        <Card size={CardSize.Large} card={selectedPost} />
    </Modal>
    )
    )
}

export default SelectedPostModal; 