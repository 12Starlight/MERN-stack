import React from 'react';
import './note_box.css';


class NoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
    this.color = this.color.bind(this); 
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

  color() {
    debugger; 
    return {colorTop: 'red', colorBody: 'green', _id: this.props.id }
  }


  render() {
    const { id, deletedNote, coloredNote } = this.props; 
    // debugger; 
    console.log('clicked')

    return (
      <div id='noteBox-wrapper'>
        <div className='noteBox-outer'>
          <div>{this.props.title}</div>
          <br/>
          <div>{this.props.text}</div>        
        </div>
        <div className='noteBox-buttons'>
          <button onClick={() => deletedNote(id)} className='noteBox-button'>delete</button>
        </div>
      </div>
    )
  }
}


export default NoteBox; 