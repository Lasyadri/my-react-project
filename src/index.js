import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//==================================================================================
// import React from 'react';
// import App from './app1/App';
// import {render} from 'react-dom';
 
// import {Provider} from 'react-redux';
// import {BrowserRouter} from 'react-router-dom';

// import store from './app1/store';
// import ScrollToTop from './app1/ScrollToTop';

// render(
//   <Provider store={store}>
    // <BrowserRouter>
    //   <ScrollToTop>
        // <App/>
    //   </ScrollToTop>
    // </BrowserRouter>
//   </Provider>,
//   ,document.getElementById('root')
// );
