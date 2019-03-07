import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Container1 from '../Container1';
import Landing1 from '../../components/Landing1';
import Landing2 from '../../components/Landing2';
import Landing3 from '../../components/Landing3';

import App from '../App';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />

        <Route path="/:lang/:screen/" component={Landing2} />
        <Route path="/:lang/" component={Container1} />
        {/* <Route path="/landing1" component={Landing1} />
        <Route path="/landing2" component={Landing2} />
        <Route path="/landing3" component={Landing3} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
