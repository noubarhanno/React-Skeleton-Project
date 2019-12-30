import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import DynamicLoader from './DynamicLoader';

const NotFound = DynamicLoader(() =>
  import(
    /* webpackChunkName: "notFound" */
    /* webpackPrefetch: true */ 'pages/NotFound/NotFound'
  )
);

const Home = DynamicLoader(() => 
    import (
        /* webpackChunkName: "Home" */
        'pages/Home/Home'
    )
)

const Router = () => {

  return (
    <BrowserRouter>
        <ErrorBoundary>
            <Switch>
              <Redirect exact={true} path="/" to="/home" />
              <Route path="/home" component={Home}/>
              <Route component={NotFound} />
            </Switch>
        </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
