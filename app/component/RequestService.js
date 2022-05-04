import axios from "axios";

const baseUrl = "http://192.168.1.9:8080/";

function getMethodRequest(url, callBackFunction) {
  console.log("came inside getMethodRequest");
  console.log(`${baseUrl}${url}`);
  axios({
    method: "get",
    url: `${baseUrl}${url}`,
  })
    .then((response) => {
      if (callBackFunction !== undefined) {
        callBackFunction(response);
      }
      return response;
    })
    .catch((err) => {
      console.log("err -- ", err);
    });
}

function postMethodRequest(url, data, callBackFunction) {
  axios.post(`${baseUrl}${url}`, { data }).then((res) => {
    callBackFunction();
    return res;
  });
}

export function getResponse(methodType, callBackFunction, url, dataJson) {
  if (methodType === "get") {
    return getMethodRequest(url, callBackFunction);
  } else {
    postMethodRequest(url, dataJson, callBackFunction);
  }
}
