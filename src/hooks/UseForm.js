import { useState } from 'react';  

const UseForm = () => {
    const [values, setValues] = useState('');
    const onChange = (e) => {
        const value = {
          ...values,
          [e.target.name]: e.target.value
        }
        setValues(value);
      }
      return [values, onChange]
}

export default UseForm;