import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';

import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import WelcomeContainer from './welcome/welcome_container';
import GroupIndexContainer from './home/group_index_container';

import GroupPageContainer from './groups/group_page_container';
// import GroupEditContainer from './groups/forms/group_page_container';
import GroupFormContainer from './groups/forms/group_form_container';

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
          <IndexRedirect to='/welcome' />
          <Route path="welcome" component={ WelcomeContainer } onEnter={_redirectIfLoggedIn}>
            <Route path="login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
            <Route path="signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          </Route>

          <Route path="home" component={ HomeContainer } onEnter={_ensureLoggedIn}>
            <Route path='groups' component={ GroupIndexContainer }/>
          </Route>

          <Route path='add_group' component={ GroupFormContainer }/>

          <Route path='groups/:groupId' component={ GroupPageContainer }>
          {/*
          //   <IndexRoute component={ GroupPageContentContainer } />
          //   <Route path='edit' component={ GroupEditContainer }/>
          //   <Route path='calendar' component={ GroupCalendarContainer } />
          //   <Route path='events/:eventId' component={ EventPageContainer }/>
          */}
          </Route>
        </Route>
     </Router>
    </Provider>
  );
};

export default Root;
