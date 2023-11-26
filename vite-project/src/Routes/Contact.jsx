import React, { useContext } from 'react';
import { GlobalContext } from "../Components/utils/global.context";
import Form from '../Components/Form'; 

const Contact = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={`contact ${state.theme}`}>
      <Form /> 
    </div>
  );
};

export default Contact;
