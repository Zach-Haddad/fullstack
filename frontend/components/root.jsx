import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
      const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace('/home');
      }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      replace('/welcome');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/welcome" component={ WelcomeContainer }>
            <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
            <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          </Route>

          <Route path="/home" component={ HomeContainer } onEnter={_ensureLoggedIn}>

          </Route>
        </Route>
     </Router>
    </Provider>
  );
};

export default Root;
