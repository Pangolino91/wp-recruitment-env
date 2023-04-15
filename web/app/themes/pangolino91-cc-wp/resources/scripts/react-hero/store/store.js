import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ACFContext = createContext();

export const ACFContextProvider = ({ children }) => {
  const [acfData, setAcfData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchACFData = async () => {
      try {
        const slug =
          window.location.pathname.replace('/', '') === ''
            ? 'sample-page'
            : window.location.pathname.replace('/', '');
        const response = await axios.get(
          `${window.location.href}wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`
        );
        setAcfData(response.data[0]?.acf);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchACFData();
  }, []);

  return (
    <ACFContext.Provider value={{ acfData, isLoading }}>
      {children}
    </ACFContext.Provider>
  );
};
