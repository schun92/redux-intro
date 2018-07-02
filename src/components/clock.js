import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions';

class Clock extends Component {

    componentDidMount(){
        setInterval(() => {
         this.props.tick(new Date().toLocaleTimeString());
        }, 1000);
    }

    render(){
        console.log('clock props:', this.props);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.time}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){

    console.log('State:', state)
    return {
        time: state.clock.time,
        title: state.clock.header
    }
}


export default connect(mapStateToProps, { tick: tick })(Clock);