import React, { useEffect } from 'react';

const CustomTitle = ({title}) => {
  useEffect(() => {
    document.title = title;
  }, []); // Runs once on component mount

  return <>
  </>
};

export default CustomTitle;
