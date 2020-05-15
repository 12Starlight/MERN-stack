import React from 'react';
import './note_box.css';


class NoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
  }

  display() {
    let x = document.getElementById('noteBox-wrapper');
    debugger;
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none'
    }
  }


  render() {
    return (
      <div id='noteBox-wrapper'>
        <div className='noteBox-outer'>
          <div>{this.props.title}</div>
          <br/>
          <div>{this.props.text}</div>        
        </div>
      </div>
    )
  }
}


export default NoteBox; 