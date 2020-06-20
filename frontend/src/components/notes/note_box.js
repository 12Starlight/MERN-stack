import React from 'react';
import './note_box.css';
import { withRouter } from 'react-router-dom';


class NoteBox extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   changed: false
    // }

    this.display = this.display.bind(this);
    this.delete = this.delete.bind(this);
  }

  display() {
    let x = document.getElementById('noteBox-wrapper');
    // debugger;
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none'
    }
  }

  delete(e) {
    e.preventDefault();
    // debugger; 
    this.props.deletedNote(this.props.id);
    if (this.props.location.pathname === '/new_note') {
      window.location.reload();
    }
  }


  render() {
    const { id, deletedNote, note } = this.props; 
    // debugger; 
    let color; 

    if (this.props.newest === undefined) {
      // debugger;
      color = this.props.color 
    } else {
      color = {
        borderTop: `60px solid ${this.props.newest.colorTop}`,
        background: `-webkit-linear-gradient(-45deg, ${this.props.newest.colorBody} 81%, ${this.props.newest.colorBody} 82%, ${this.props.newest.colorBody} 82%, ${this.props.newest.colorCorner} 100%)`
      };
    }
    
    if (note) {
      color = {
        borderTop: `60px solid ${this.props.note.colorTop}`,
        background: `-webkit-linear-gradient(-45deg, ${this.props.note.colorBody} 81%, ${this.props.note.colorBody} 82%, ${this.props.note.colorBody} 82%, ${this.props.note.colorCorner} 100%)`
      }
    } 

    return (
      <div id='noteBox-wrapper'>
        <div style={color} className='noteBox-outer'>
          <div className='noteBox-title'>{this.props.title}</div>
          <br/>
          <div className='noteBox-text'>{this.props.text}</div>        
        </div>
        <div className='noteBox-buttons'>
          <button onClick={this.delete} className='noteBox-button'>delete</button>
        </div>
      </div>
    )
  }
}


export default withRouter(NoteBox); 