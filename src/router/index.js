import { Route, Redirect, Switch } from 'react-router-dom';
import React, { Component } from 'react'



export default class RouterView extends Component {

  render() {
    let { routes } = this.props;
    let compList = routes.filter((item) => item.path);
    let redirectList = routes.filter((item) => item.to);
    console.log(compList )

    return (
      <Switch>
        {compList.map((item, i) => {
          return <Route key={i} path={item.path} render={(props) => {
            if (item.auth && !window.localStorage.getItem('token')) {
              return (<Redirect key={i} to={{
                pathname: '/login', query: { redirect: item.path }
              }}></Redirect>)
            } else {
              return (<item.component {...props} child={item.children || []} navLink={item.children ? item.children.filter(item => item.path) : []}></item.component>)
            }
          }}></Route>
        })}

        {redirectList.map((item, i) => {
          return <Redirect key={i} to={item.to} from={item.from}></Redirect>
        })}
      </Switch>
    )
  }
}