import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import PostCreate from '../posts/PostCreate/PostCreate';
import PostEdit from '../posts/PostEdit/PostEdit';
import PostDelete from '../posts/PostDelete/PostDelete';
import PostList from '../posts/PostList/PostList';
import PostShow from '../posts/PostShow/PostShow';
import Header from '../layout/Header/Header';

import history from '../../utilities/history'

import './App.scss';


const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path = "/" exact component={PostList} />
          <Route path = "/posts/new" exact component={PostCreate} />
          <Route path = "/posts/edit/:id" exact component={PostEdit} />
          <Route path = "/posts/delete/:id" exact component={PostDelete} />
          <Route path = "/posts/:id" exact component={PostShow} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;