import fakeData from "../fakeData";

// Fake an API call
const accounts = fakeData();

const getUserInfo = (handle) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(accounts[handle]);
    }, 1500);
  });
};

export default getUserInfo;
