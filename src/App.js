import './App.css';
import Balances from './components/balances';
import { ToastProvider } from 'react-toast-notifications';
import ErrorHandler from './components/errors-handler';

function Application() {
  return (
    <div className="App">
      <ErrorHandler />
      <Balances />
    </div>
  );
}

const App = () => {
  return (
    <ToastProvider>
      <Application />
    </ToastProvider>
  );
};

export default App;
