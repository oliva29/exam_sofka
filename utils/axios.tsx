import axios, { AxiosRequestConfig } from 'axios'; 
import { HOST_API } from '@/config-global'; 

const axiosInstance = axios.create({ 
  baseURL: HOST_API, 
  headers: {
  authorId: 1
  }});
const methods = ['delete', 'post', 'put'];
axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status === 200 && methods.includes(String(res.config.method))) {
 
    }

    return res;
  },
  (error) => {
    const errorMessage = (error.response && error.response.data) || 'Something went wrong';
    const errorInstance = new Error(JSON.stringify(errorMessage));
    Object.assign(errorInstance, error);
    return Promise.reject(errorInstance);
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config }); 
  if (!res) return [] ;
  return res;
};

export const create = async (url: string, params: any, formDataActive?: boolean) => {
  let res;
  if (formDataActive) {
    const formData = new FormData();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in params) {
      if (params[key]) formData.append(key, params[key]);
    }
    res = await axiosInstance.post(url, formData);
  } else {
    res = await axiosInstance.post(url, params);
  }

  return res;
};

export const update = async (url: string, params: any, formDataActive?: boolean) => {
  let res;
  if (formDataActive) {
    const formData = new FormData();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in params) {
      if (params[key]) formData.append(key, params[key]);
    }

    formData.append('_method', 'PUT');
    res = await axiosInstance.post(url, formData);
  } else {
    res = await axiosInstance.put(url, params);
  }

  return res;
};

export const deleteItem = async (url: string) => {
  const res = await axiosInstance.delete(url);

  return res;
};
 
 