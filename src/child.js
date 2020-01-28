import React from 'react'; 

class Child extends React.Component { 
	state={
        count:this.props.data.count
    } 

	UNSAFE_componentWillMount() 
	{ 
		console.log("Child componentWillMount()"); 
	} 

	componentDidMount() 
	{ 
		console.log("Child componentDidMount()"); 
    } 
    changeState =() => {
        this.setState({
            count:this.state.count+1
        })
    }

	render() 
	{ 
		return ( 
			<div> 
			<h1>Child Count--- {this.state.count}</h1>
            <button onClick={this.changeState}>child increment</button> 
            <h2> {console.log("Child render")} </h2> 
           
			</div>); 
    } 
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("Child componentWillReceiveProps()");
      }
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("Child shouldComponentUpdate()"+nextState.count); 
        return true; 
    } 
  
    UNSAFE_componentWillUpdate() 
    { 
        console.log("Child componentWillUpdate()"); 
    } 
  
    componentDidUpdate(preProps,preState) 
    { 
        console.log("Child componentDidUpdate()"+preState.count); 
    } 
    UNSAFE_componentWillUnmount() {
        console.log("Child componentWillUnmount()");
      } 
} 

export default Child;
