const initicalState = { name: "" };

const userReducer = (state = initicalState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      const { name } = action;
      return { name: name };

    default:
      return state;
  }
};

export default userReducer;
