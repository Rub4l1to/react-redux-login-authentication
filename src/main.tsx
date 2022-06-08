import React from 'react';
import ReactDOM from 'react-dom/client';

//* Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

//* Pages
import { Navigation } from 'routes/Navigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
);
