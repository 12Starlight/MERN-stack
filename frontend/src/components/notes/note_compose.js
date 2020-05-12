import React from 'react';
import NoteBox from './note_box';


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
      <div>
        <form>
          <div>
            <input 
              type='text'
              value={this.state.title}
              onChange={this.update('title')}
              placeholder='Title'
            />
            <br/>
            <input 
              type='textarea'
              value={this.state.text}
              onChange={this.update('text')}
              placeholder='Write your note...'
            />
            <input type='submit' value='Submit' />
          </div>
        </form>
        <br/>
        <NoteBox text={this.state.newNote.text} title={this.state.newNote.title} />
      </div>
    )
  }
}


export default NoteCompose; 