import React from 'react';
import ReactDOM from "react-dom/client";
import SimpleReactLightbox from 'simple-react-lightbox'
import App from './App';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.css';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import reducers from './pages/blog/redux/reducer'

const store = createStore(reducers, compose(applyMiddleware(thunk)),
window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}> <SimpleReactLightbox><App /></SimpleReactLightbox> </Provider>);
