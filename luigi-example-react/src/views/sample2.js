import React, { Component } from 'react';
import '../../node_modules/fundamental-styles/dist/fundamental-styles.css';
import { withRouter } from 'react-router-dom';
import { addInitListener } from '@luigi-project/client';


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

    console.log('route 2', window.location.href);
    console.log('params 2', this.props.match);
  }

  render() {
    return (
      <div>
        <section className="fd-section">
          <div className="fd-section__header">
            <h1 className="fd-section__title">Page 2</h1>
          </div>
          <div className="fd-panel">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </div>
          {JSON.stringify(this.props.match.params)}
        </section>
      </div>
    );
  }
}

export default withRouter(Sample1);