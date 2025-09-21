import { HashRouter } from 'react-router-dom';
import AppRoutes from './Routes';

export default function App() {
  return (

    <HashRouter>
      <AppRoutes />
    </HashRouter>

  );
}