export const changeName = (name) => {
  console.log(name);
  return {
    type: "CHANGE_NAME",
    name: name,
  };
};
