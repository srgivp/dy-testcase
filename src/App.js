import { ToastProvider } from 'react-toast-notifications';
import ErrorHandler from './components/errors-handler';
import StyledBalances from './components/styled-balances';
import 'semantic-ui-css/semantic.min.css';

function Application() {
  return (
    <div className="App">
      <ErrorHandler />
      <StyledBalances />
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
