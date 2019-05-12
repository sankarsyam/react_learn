/* https://jscomplete.com/playground/s271739 */

function Button(props){
  const handlecClick= ()=>props.onClickFunction(props.incrementVal);
  return (
   <button onClick= {handlecClick}>+{props.incrementVal}</button>
 );
}

function Display(props){
  return <div>{props.message}</div>
}

function App(){
  const [counter,setCounter] = useState(0);
  const incrementCounter = (value)=>setCounter(counter+value);
  return ( 
    <div>
      <Button onClickFunction={incrementCounter} incrementVal={1} />
      <Button onClickFunction={incrementCounter} incrementVal={5} />
      <Button onClickFunction={incrementCounter} incrementVal={10} />
      <Button onClickFunction={incrementCounter} incrementVal={15} />
      <Display message={counter}/>
    </div>  
  );
}

ReactDOM.render(
  <App/>
  document.getElementById('mountNode')
);