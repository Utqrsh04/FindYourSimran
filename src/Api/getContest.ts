export const getCodeforces = () => {
  return fetch("https://kontests.net/api/v1/codeforces", {
    method: "GET",
    headers: {},
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};


export const getLeetcode = () => {
    return fetch("https://kontests.net/api/v1/leet_code", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));
  };
  

export const getTopCoder = () => {
    return fetch("https://kontests.net/api/v1/top_coder", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));
  };

//   https://kontests.net/api/v1/all

export const getAllContest = () => {
    return fetch("https://kontests.net/api/v1/all", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));
  };

