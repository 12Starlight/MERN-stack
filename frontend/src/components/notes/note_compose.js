import React from 'react';
import NoteBox from './note_box';
import './note-compose.css'
import './note_box.css';


class NoteCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      text: '',
      colorTop: '#fdfd86',
      colorBody: '#ffff88',
      colorCorner: '#ffffc6',
      newNote: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newNote: { title: nextProps.newNote.title, text: nextProps.newNote.text }, id: nextProps.newNote._id });
    // debugger; 
  }

  componentDidUpdate(prevProps, prevState) {

  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger; 
    let note = {
      title: this.state.title,
      text: this.state.text,
      colorTop: this.state.colorTop,
      colorBody: this.state.colorBody
    }

    this.props.composeNote(note);
    this.setState({text: '', title: ''})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleColor(input1, input2, input3) {
    console.log(input1, input2);
    this.setState({
      colorTop: input1,
      colorBody: input2,
      colorCorner: input3 
    })
  }


  render() {
    const { deletedNote } = this.props;

    let color = {
      borderTop: `60px solid ${this.state.colorTop}`,
      background: `-webkit-linear-gradient(-45deg, ${this.state.colorBody} 81%, ${this.state.colorBody} 82%, ${this.state.colorBody} 82%, ${this.state.colorCorner} 100%)`
    }

    let input = {
      outline: `1px solid ${this.state.colorTop}`
    }

    return(
      <div style={color} className='noteCompose-wrapper'>
        <div className='noteCompose-outer' >
          <form >
            <div className='noteComposeForm'>
              <input
                style={input}
                className='noteCompose-input'
                type='text'
                value={this.state.title}
                onChange={this.update('title')}
                placeholder='Title'
              />
              <br />
              <input
                style={input}
                className='noteCompose-input'
                type='textarea'
                value={this.state.text}
                onChange={this.update('text')}
                placeholder='Write your note...'
              />
              <div className='noteCompose-buttons'>
                <button className='noteCompose-button' onClick={this.handleSubmit} >Create</button>
                <button className='noteCompose-button' onClick={() => this.handleColor('#e64533', '#e74c3c', '#f1978e')} >Red</button>
                <button className='noteCompose-button' onClick={() => this.handleColor('#2691d9', '#3498db', '#93c8ec')} >Blue</button>
                <button className='noteCompose-button' onClick={() => this.handleColor('#d9b00d', '#f1c40f', '#f8e187')} >Gold</button>
              </div>
            </div>
          </form>
          <br />
          <div className='noteCompose-noteBox-wrapper'>
            <NoteBox text={this.state.newNote.text} title={this.state.newNote.title} id={this.state.id} deletedNote={deletedNote} color={color} input={input}  />          
          </div>
        </div>
      </div>
    )
  }
}


export default NoteCompose; 
