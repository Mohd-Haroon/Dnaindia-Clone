import axios from "axios";

export const actionTypes = {
  ADD_DATA_HOME: "ADD_DATA_HOME",
  ADD_DATA_PHOTOS: "ADD_DATA_PHOTOS",
};

const getHomedataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_HOME,
    payload,
  };
};

export const gethomedata = () => (dispatch) => {
  axios({
    url: "https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=f882fb5af9da4f55a51ffa93be93395d",
    method: "GET",
  })
    .then((res) => {
        console.log("res",res)
      dispatch(getHomedataSuccess(res.data.articles));
    })
    .catch((err) => console.log("error", err));
};

// PHOTOPAGE

const getPhotodataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_PHOTOS,
    payload,
  };
};

export const getPagedata = () => (dispatch) => {
  axios({
    url: "https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=f882fb5af9da4f55a51ffa93be93395d",
    method: "GET",
  })
    .then((res) => dispatch(getPhotodataSuccess(res.data.articles)))
    .catch((err) => console.log("error", err));
};
