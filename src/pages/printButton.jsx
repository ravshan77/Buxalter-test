// React.js Frontend (PrintButton.js)

import React from 'react';
import axios from 'axios';

axios.defaults.port = 8000;
axios.defaults.baseURL = "http://localhost:8000"
const PrintButton = () => {
  const handlePrint = async () => {
    try {
      await axios.post('/api/print', { data: 'Your print data here' },  {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      });
      console.log('Print job sent successfully');
    } catch (error) {
      console.error('Error sending print job:', error);
    }
  };

  return (<>
    <button onClick={handlePrint}>Print</button>
  </>
  );
};

export default PrintButton;
