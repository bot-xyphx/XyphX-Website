import React, { useEffect, useState } from 'react';
import App from './App';
import SplashScreen from './components/loader/SplashScreen';

export default function Render() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

 
    


  return (
    <div>
      {showSplash ? (<SplashScreen />) : (<App />)}
    </div>
  );
}

