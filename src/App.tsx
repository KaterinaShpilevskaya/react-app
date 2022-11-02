import React from 'react';

//@ts-ignore
import styles from './App.module.css'
import SignUp from './Pages/SignUp';
import Success from './Pages/Success';

const App = () => {
  return <div className={styles.container}>
      <SignUp />
  </div>
}

export default App;
