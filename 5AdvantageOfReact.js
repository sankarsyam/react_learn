/* https://jscomplete.com/playground/s271883 */
/*
Advantage of using react
In html entire dome is loaded again , but in react only updated portion is loaded
*/

const render = () =>{
  document.getElementById('mountNode').innerHTML = `
<div>
Hello Syam
<input/>
<pre>${(new Date).toLocaleTimeString()}</pre>
</div>
`;

ReactDOM.render(
React.createElement(
 "div",
  "null",
  "Hello Syam",
  React.createElement('input',null),
   React.createElement('pre',null,(new Date).toLocaleTimeString()),
),
  document.getElementById('mountNode2'),
);
}
setInterval(render,2000);

