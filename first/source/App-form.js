import React, { Component } from 'react';
import { render } from'react-dom';

/* React and ReactDOM were only recently split into two
different libraries.Prior to v0 .14, all ReactDOM functionality was
part of React.This may be a source of confusion, since any slightly
dated documentation won 't mention the React / ReactDOM distinction.

As the name implies, ReactDOM is the glue between React and the
DOM.Often, you will only use it for one single thing: mounting with
ReactDOM.render().Another useful feature of ReactDOM is
ReactDOM.findDOMNode() which you can use to gain direct access to a
DOM element.(Something you should use sparingly in React apps, but it
can be necessary.) If your app is "isomorphic", you would also use
ReactDOM.renderToString() in your back - end code.

For everything else, there 's React. You use React to define and
create your elements, for lifecycle hooks, etc. i.e. the guts of a
React application.

The reason React and ReactDOM were split into two libraries was due to
the arrival of React Native.React contains functionality utilised in
web and mobile apps.ReactDOM functionality is utilised only in web
apps.[UPDATE: Upon further research, it 's clear my ignorance of React
Native is showing. Having the React package common to both web and
mobile appears to be more of an aspiration than a reality right now.
React Native is at present an entirely different package.]

    See the blog post announcing the v0 .14 release:
    https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html
*/
class Search extends Component {
	constructor(){
		super();
		this.state = {
			searchItem: 'React'
		}
	}
	handleChange(event) {
		this.setState({searchItem: event.target.value});
		console.log(this.state.searchItem, event.target.value)
	}
	handleSubmit(event){
		console.log( "Submitted values are:",
			event.target.name.value,
			event.target.email.value );
		event.preventDefault();
	}
	handleFocus(){
		this.refs.myName.focus();
		// this.refs['myName'].focus();
		// this.myName.focus();
	}
    render() {
        return (
        	<div>
	            Search Term:
	            <input type = "search" value={this.state.searchItem}
	            	onChange={this.handleChange.bind(this)}/ >
	            	<br />
	            <textarea defaultValue='This is a TextArea' />
	            	<br />
	            <select
	            // value = "B"
	            >
	     			<option value = "A" > Mobile </option>
	     			<option value="B">Work</option>
	     			<option value = "C" > Home </option>
     			</select>

     			<form onSubmit={this.handleSubmit}>
     				Name: <input type="text" name="name" ref="myName"
     				// ref={ (ref) => this.myName = ref }
     				/> <br />
     				E-mail: <input type="text" name="email" /> <br />
     				Focus Name: <input type="button" value="Focus Name"
     					onClick={this.handleFocus.bind(this)} />
     				<button type="submit">Submit</button>
     			</form>
        </div>
        );
    }
}

render( <Search / > , document.getElementById('root'));
