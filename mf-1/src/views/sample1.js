import React, { Component } from 'react';
import { linkManager, getNodeParams, getPathParams, addInitListener } from '@luigi-project/client';
import { withRouter, useParams } from 'react-router-dom';


class Sample1 extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const initListenerId = addInitListener(
      (context) => {
        console.log('context:', context);
      }
    )

    console.log('route', window.location.href);
    console.log('params', this.props.match);
  }

  handleClick = e => {
    this.props.history.push("/haushalt/50158/test/2/test/3/4/5/6/7/8/9/10/11/12/13");
    linkManager().withoutSync().navigate('haushalt/50158/test/2/test/3/4/5/6/7/8/9/10/11/12/13');
    console.log('params', this.props.match)
  };

  render() {
    return (
      <div>
        <h1>Page 1</h1>
        <button onClick={this.handleClick}>Go More Than 9 Params</button>
      </div>
    );
  }
}

export default withRouter(Sample1);
