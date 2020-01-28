import React from 'react'; 
import Child from './child.js'

class App extends React.Component { 
	constructor(props) 
	{ 
		super(props); 
      this.state = { 
         count:5,
         show:false
       }; 
	} 

	UNSAFE_componentWillMount() 
	{ 
		console.log("parent componentWillMount()"); 
	} 

	componentDidMount() 
	{ 
		console.log("parent componentDidMount()"); 
   } 
   
   changeState= () =>{
      this.setState({
         count:this.state.count+1,
         show:!this.state.show
      })
   }
   /* componentWillReceiveProps(nextProps){
      console.log("Child componentWillReceiveProps()");
    } */
	render() 
	{ 
		return ( 
			<div> 
         {console.log("parent render")}
			<h1>parent Count --- { this.state.count }</h1>
         <button onClick={this.changeState}>parent increment</button>  
         {
         <Child data={this.state}/>}
			</div>); 
   } 
   
   shouldComponentUpdate(nextProps, nextState) 
   { 
       console.log("parent shouldComponentUpdate()"); 
       return true; 
   } 
 
   UNSAFE_componentWillUpdate() 
   { 
       console.log("parent componentWillUpdate()"); 
   } 
 
   componentDidUpdate() 
   { 
       console.log("parent componentDidUpdate()"); 
   }  
   componentWillUnmount() {
      console.log("parent componentWillUnmount()");
    }
} 

export default App;
