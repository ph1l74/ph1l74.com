import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from '@/pages/Main';
import { ContactsPage } from '@/pages/Contacts';
import { AboutPage } from '@/pages/About';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<MainPage />} />
            <Route path='contacts' element={<ContactsPage />} />
            <Route path='about' element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </AnimatePresence>
  );
};

export default App;
