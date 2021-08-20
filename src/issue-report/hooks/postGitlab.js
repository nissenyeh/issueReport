import { useMutation } from 'react-query';
import axios from 'axios';


const api = ''

export const usePostGitlab = () => {
  return useMutation((data)=> {
    return axios.post(api, data).then((response) => response.data);
  })
};

// todo: use 開頭（例如：useReport 的命名？）
