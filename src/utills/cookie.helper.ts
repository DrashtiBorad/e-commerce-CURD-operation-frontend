export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId;
};
export const getUserDetails = () => {
  const userDetails = localStorage.getItem("user");
  return userDetails;
};
