import React from 'react';
import { Provider } from 'react-redux';
import './App.less';
import Navbar from './components/Navbar'
import configureStore from './store';
import { INIT_STATE } from './constants';
import Section from './components/Section';
import StarterContent from './components/StarterContent';
import StarterFooter from './components/StarterFooter';


const store = configureStore(INIT_STATE);


function App() {

  return (
    <Provider store={store}>
      <div className="phl-starter-bg"></div>
      <Section style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Navbar />
        <StarterContent />
        <StarterFooter />
      </Section>
      <Section style={{ backgroundColor: 'rgba(0,0,0,1' }} id="#projects">
          <Navbar />
      </Section>
    </Provider>
  );
}

export default App;
