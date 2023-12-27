import axios from 'axios';

const fetch = async (apiURL, params) => {
  let resp;
  await axios.get(apiURL, {
    params: {
      ...params,
    }
  }).then(({data}) => {
    resp = data
  });
  return resp
}

export default fetch