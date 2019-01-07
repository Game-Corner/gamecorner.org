var React = require('react');
var ReactDOM = require('react-dom');
import './news.css';

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.num; i++) {
    items.push(props.children);
  }
  return items;
}

function Calendar(props) {
  return (
    <div className='Calendar'>
      <h1>{props.name}'s Calendar</h1>
      <div id='box'>
        <Repeat num={31}>
          <div id='inner'></div>
        </Repeat>
      </div>
    </div>
  );
}

const team = {
  name: 'Game Corner',
  days: 31
};

ReactDOM.render(
  <Calendar 
    name={team.name}
    days={team.days}
  />,
  document.getElementById('root')
);
