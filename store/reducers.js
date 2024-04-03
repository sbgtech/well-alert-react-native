import TYPE from "./type";

const initialState = {
  user: null,
  isLogged: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.VERIFY_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case TYPE.VERIFY_FAIL:
      return {
        user: null,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default user;
