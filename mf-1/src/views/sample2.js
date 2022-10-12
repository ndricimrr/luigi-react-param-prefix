import React, { Component } from 'react';
import { linkManager, getNodeParams, getPathParams, addInitListener } from '@luigi-project/client';



class Sample2 extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const initListenerId = addInitListener(
            (context) => {
                console.log('context:', context);
            }
        )

        console.log('route 1', window.location.href);
        console.log('params 1', this.props.match);
    }

    handleClick = e => {
        this.props.history.push("/haushalt/50158/test/2/test/3/4/5/6/7/8/9/10/11/12/13");
        linkManager().withoutSync().navigate('haushalt/50158/test/2/test/3/4/5/6/7/8/9/10/11/12/13');
        console.log('params', this.props.match)
    };

    render() {
        return (
            <div>
                <h1>Page 2</h1>
                {JSON.stringify(this.props.match.params)}
            </div>
        );
    }
}

export default Sample2;
