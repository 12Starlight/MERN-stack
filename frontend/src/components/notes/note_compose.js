import React from 'react';
import NoteBox from './note_box';
import './note-compose.css'
import './note_box.css';


class NoteCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      newNote: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    debugger; 
    this.setState({ newNote: { title: nextProps.newNote.title, text: nextProps.newNote.text } });
  }

  handleSubmit(e) {
    e.preventDefault();

    let note = {
      title: this.state.title,
      text: this.state.text
    }

    this.props.composeNote(note);
    this.setState({text: '', title: ''})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return(
      <div className='noteCompose-wrapper'>
        <div className='noteCompose-outer' >
          <form onSubmit={this.handleSubmit} >
            <div className='noteComposeForm'>
              <input
                className='noteCompose-input'
                type='text'
                value={this.state.title}
                onChange={this.update('title')}
                placeholder='Title'
              />
              <br />
              <input
                className='noteCompose-input'
                type='textarea'
                value={this.state.text}
                onChange={this.update('text')}
                placeholder='Write your note...'
              />
              <div className='noteCompose-buttons'><input className='noteCompose-button' type='submit' value='Create' /></div>
            </div>
          </form>
          <br />
          <div className='noteCompose-noteBox-wrapper'>
            <NoteBox text={this.state.newNote.text} title={this.state.newNote.title} />          
          </div>
        </div>
      </div>
    )
  }
}


export default NoteCompose; 