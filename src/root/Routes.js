import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import NotFoundPage from '../components/404';
import SearchContainer from '../screens/Search/Container';
import ArtistContainer from '../screens/Artist/Container';

export default (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact={true} path="/" component={SearchContainer} />
        <Route path="/artist/:id" component={ArtistContainer} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
};
