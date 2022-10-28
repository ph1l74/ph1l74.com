import * as React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPage } from '@/pages/Main';
import { StateType } from './types';

const App: React.FC = () => {
  const currentPage: string = useSelector(
    (state: { store: StateType }) => state.store.currentPage
  );

  return <Router>{<MainPage />}</Router>;
};

export default App;
