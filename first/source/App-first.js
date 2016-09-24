import React, {Component} from 'react';
/*
class Hello extends Component {
	render() {
		var place = "吴哥窟";
		return (
			<h1>Hello {place}!</h1>
		);
	}
}

React.render(<Hello />, document.getElementById("root"));
*/

/*
class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity="1" name="Bread" />
				<ListItem quantity="6" name="Eggs" />
				<ListItem quantity="2" name="Milk" />
			</ul>
		);
	}
}

class ListItem extends Component {
	render() {
		return (
			<li>
			{this.props.quantity} x {this.props.name}
			</li>
		);
	}
}
*/

class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity="1"> Bread children </ListItem>
				<ListItem quantity="6"> Eggs </ListItem>
				<ListItem quantity="2"> Milk </ListItem>
			</ul>
		);
	}
}

class ListItem extends Component {
	render() {
		return (
			<li>
			{this.props.quantity} x {this.props.children}
			</li>
		);
	}
}
React.render(<GroceryList />, document.getElementById('root'));
