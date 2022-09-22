import { StatusBar } from 'react-native';

import Home from './src/Screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent
      />
    </>
  );
}


