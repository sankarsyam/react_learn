class Button extends React.Component {
handleClickFunction = () =>{
	this.props.handleClick(this.props.incrementValue)
}
render(){
 return(
 <button onClick={this.handleClickFunction}>
    + {this.props.incrementValue}
 </button>
 );
}
} 

const Result = (props) =>{
  return (
    <div>{props.count}</div>
  );
}

class App extends React.Component{
  state = {
    count :0
  }
  
  increment = (incrementValue)=>{
     this.setState((prevState) => ({
        count: prevState.count+incrementValue
    }))
  }
 render(){
 	return(
   <div>
    <Button incrementValue={1} handleClick={this.increment}/>
    <Button incrementValue={5} handleClick={this.increment}/>
    <Button incrementValue={20} handleClick={this.increment}/>
    <Button incrementValue={100} handleClick={this.increment}/>
    <Result count= {this.state.count}/>
    </div>
  );
 }
}

ReactDOM.render(<App/>,mountNode);
