import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import routers from './routes'

const router = createBrowserRouter(routers)

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
</Provider>,
)