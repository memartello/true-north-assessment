import React, {useState, useMemo, useEffect} from 'react';
import axios from 'axios';

export const ax = axios.create();

export const useAxiosLoader = () => {
    const [counter, setCounter] = useState(0);
      
    const interceptors = useMemo(() => {
      const inc = () => setCounter(counter => counter + 1);
      const dec = () => setCounter(counter => counter - 1);
      
      return ({
        request: config => (inc(), config),
        response: response => (dec(), response),
        error: error => (dec(), Promise.reject(error)),
      });
    }, []); // create the interceptors
    
    useEffect(() => {
      // add request interceptors
      const reqInterceptor = ax.interceptors.request.use(interceptors.request, interceptors.error);
      // add response interceptors
      const resInterceptor = ax.interceptors.response.use(interceptors.response, interceptors.error);
      return () => {
        // remove all intercepts when done
        ax.interceptors.request.eject(reqInterceptor);
        ax.interceptors.response.eject(resInterceptor);
      };
    }, [interceptors]);
    
    return [counter > 0];
  };