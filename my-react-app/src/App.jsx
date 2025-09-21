import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

export default function App() {
  return (

    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  );
}