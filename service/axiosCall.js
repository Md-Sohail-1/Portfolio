import axios from 'axios';

export const commonRequest = async (methods, url, body) => {
  let config = {
    'method': methods,
    'url': url, 
    'data': body,
    'headers': {
      'Content-Type': 'application/json',
    },
  };
  
  return axios(config).then((data) => {
    return data;
  }).catch((err) => {
    return err;
  })
};