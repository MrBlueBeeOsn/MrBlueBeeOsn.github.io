import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from '@/AppRoutes';

export default function App(): React.JSX.Element {
  return (

    <HashRouter>
      <AppRoutes />
    </HashRouter>

  );
}