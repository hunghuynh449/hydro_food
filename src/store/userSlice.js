import { createSlice } from "@reduxjs/toolkit";

const userList = [
  { name: "hunghuynh449", password: "123" },
  { name: "test", password: "123" },
  { name: "admin", password: "123" },
];

const userSlice = createSlice({
  name: "user",
  initialState: { ggID: "", name: "", password: "", auth: false, response: "" },

  reducers: {
    login(state, action) {
      const auth = userList.some(
        (user) =>
          user.name === action.payload.name &&
          user.password === action.payload.password
      );
      console.log(action.payload.name, action.payload.password);
      if (auth) {
        state.name = action.payload.name;
        state.password = action.payload.password;
        state.auth = true;
        state.response = "Đăng nhập thành công!";
      } else {
        state.response = "Sai tên đăng nhập hoặc mật khẩu";
      }
    },
    loginGG(state, action) {
      state.ggID = action.id;
      state.email = action.email;
      state.auth = true;
      state.response = "Đăng nhập thành công!";
    },
    logout(state) {
      state.name = "";
      state.password = "";
      state.ggID = "";
      state.auth = false;
      state.response = "Đăng xuất thành công!";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
