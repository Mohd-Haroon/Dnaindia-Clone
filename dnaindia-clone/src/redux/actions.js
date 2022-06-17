import axios from "axios";

export const actionTypes = {
  ADD_DATA_HOME: "ADD_DATA_HOME",
  ADD_DATA_PHOTOS: "ADD_DATA_PHOTOS",
  ADD_DATA_LATEST: "ADD_DATA_LATEST",
  ADD_DATA_SPORTS: "ADD_DATA_SPORTS",
  ADD_DATA_ENTERTAINMENT: "ADD_DATA_ENTERTAINMENT",
  ADD_DATA_EXPKAINERS: "ADD_DATA_EXPKAINERS",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ADD_DATA_INDIA: "ADD_DATA_INDIA",
  ADD_DATA_VIRAL: "ADD_DATA_VIRAL",
  ADD_DATA_LIFESTYLE: "ADD_DATA_LIFESTYLE",
  ADD_DATA_BUSINESS: "ADD_DATA_BUSINESS",
  ADD_DATA_WORLD: "ADD_DATA_WORLD",
};

const loadings = () => {
  return {
    type: actionTypes.LOADING,
  };
};

const getHomedataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_HOME,
    payload,
  };
};

export const gethomedata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/home",
    method: "GET",
  })
    .then((res) => {
      // console.log("home", res);
      dispatch(getHomedataSuccess(res.data));
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
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/photo",
    method: "GET",
  })
    .then((res) =>{
      // console.log("photo", res);
       dispatch(getPhotodataSuccess(res.data))})
    .catch((err) => console.log("error", err));
};

//LATEST DATA

const getlATESTdataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_LATEST,
    payload,
  };
};

export const getlATESTdata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/latest",
    method: "GET",
  })
    .then((res) => {
      // console.log("la",res.data)
      dispatch(getlATESTdataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

//sports
// https://newsapi.org/v2/top-headlines?q=sports&f&apiKey=f882fb5af9da4f55a51ffa93be93395d

const getSportsdataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_SPORTS,
    payload,
  };
};

export const getSportsdata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/sports",
    method: "GET",
  })
    .then((res) => {
      // console.log("lasports",res.data)
      dispatch(getSportsdataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

//https://newsapi.org/v2/everything?q=entertainment&apiKey=f882fb5af9da4f55a51ffa93be93395d
// entertainment

const getSEntertainmentdataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_ENTERTAINMENT,
    payload,
  };
};

export const getEntertainmentsdata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/enter",
    method: "GET",
  })
    .then((res) => {
      // console.log("entertain",res.data)
      dispatch(getSEntertainmentdataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

// explaibers  https://newsapi.org/v2/everything?q=explainers&apiKey=f882fb5af9da4f55a51ffa93be93395d

const getExplainersdataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_EXPKAINERS,
    payload,
  };
};

export const getExplainersdata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/explain",
    method: "GET",
  })
    .then((res) => {
      // console.log("EXPLAINers",res.data)
      dispatch(getExplainersdataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

// india https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

const getiNDIAdataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_INDIA,
    payload,
  };
};

export const getiNDIAdata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/india",
    method: "GET",
  })
    .then((res) => {
      // console.log("india",res.data)
      dispatch(getiNDIAdataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

// https://newsapi.org/v2/everything?q=viral-news&pageSize=100&sortBy=popularity&apiKey=f882fb5af9da4f55a51ffa93be93395d

const getViraldataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_VIRAL,
    payload,
  };
};

export const getViraldata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/viral",
    method: "GET",
  })
    .then((res) => {
      // console.log("viralnews",res.data)
      dispatch(getViraldataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

// https://newsapi.org/v2/everything?q=lifestyle&pageSize=100&sortBy=popularity&apiKey=f882fb5af9da4f55a51ffa93be93395d

const getLifestyledataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_LIFESTYLE,
    payload,
  };
};

export const getLifestyledata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/life",
    method: "GET",
  })
    .then((res) => {
      // console.log("lifesty",res.data)
      dispatch(getLifestyledataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

// https://newsapi.org/v2/top-headlines?q=Business&pageSize=100&sortBy=popularity&apiKey=f882fb5af9da4f55a51ffa93be93395d

const getbUSINESSdataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_BUSINESS,
    payload,
  };
};

export const getbUSINESSdata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/business",
    method: "GET",
  })
    .then((res) => {
      // console.log("busines",res.data.articles)
      dispatch(getbUSINESSdataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};

// world https://newsapi.org/v2/top-headlines?q=world&pageSize=100&sortBy=popularity&apiKey=f882fb5af9da4f55a51ffa93be93395d

const getWorlddataSuccess = (payload) => {
  return {
    type: actionTypes.ADD_DATA_WORLD,
    payload,
  };
};

export const getWorlddata = () => (dispatch) => {
  dispatch(loadings());
  axios({
    url: "http://localhost:8080/world",
    method: "GET",
  })
    .then((res) => {
      // console.log("world",res.data)
      dispatch(getWorlddataSuccess(res.data));
    })
    .catch((err) => console.log("error", err));
};
