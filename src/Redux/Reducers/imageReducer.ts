import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ImageReducerState = {
    selectedImage: string;
    isSelectedImageModalOpened: boolean
}


const initialState: ImageReducerState = {
    selectedImage: '',
    isSelectedImageModalOpened: false
}

const imageSlice = createSlice ( {
    name: "imageReducer",
    initialState,
    reducers: {
        setSelectedImage: (state, action: PayloadAction<string>) => {
            state.selectedImage = action.payload;
            state.isSelectedImageModalOpened = true
        },
        setSelectedImageModalVisible: (state, action: PayloadAction<boolean> ) => {
            state.isSelectedImageModalOpened=action.payload
            if(!action.payload){
                state.selectedImage='';
            }
        }
    }
})

export const { setSelectedImage, setSelectedImageModalVisible } = imageSlice.actions;
const imageReducer = imageSlice.reducer;

export default imageReducer;