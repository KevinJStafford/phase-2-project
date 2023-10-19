import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import DefaultChild from './components/DefaultChild';
import ActivityForm from './components/ActivityForm';
import RandomButton from './components/RandomButton';
import Activities from './components/Activities';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error in app. Whoops!</div>,
    children: [
      {index: true, element: <DefaultChild />},
      {path: '/activities',
       element: <Activities />,
      },
      {
        path: '/activities/form',
        element: <ActivityForm />,
      },
      {
        path: '/activities/random',
        element: <RandomButton />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
