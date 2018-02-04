import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import ListingPage from '../views/ListingPage';
import PageNotFound from '../views/PageNotFound';
import withFetching from '../components/WithFetching';

const ListingPageWithFetching = withFetching('/api/products')(ListingPage);

export default (
    <Router history={hashHistory}>
        <Route path="/" component={ListingPageWithFetching}/>
        <Route path="*" exact={true}  component={PageNotFound}/>
    </Router>
);