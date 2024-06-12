import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "LiveChatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(100, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
