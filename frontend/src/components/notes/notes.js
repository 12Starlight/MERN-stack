import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteBox from './note_box';
import './notes.css';


class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  // componentWillReceiveProps(newState) {
  //   this.setState({ notes: newState.notes });
  // }
  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.notes !== prevState.notes) {
  //     debugger; 
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    // debugger; 
    if (prevProps.notes !== this.state.notes) {
      this.setState({ notes: prevProps.notes });
    }
  }


  render() {
    if (this.state.notes.length === 0) {
      return (<div>There are no notes</div>)
    } else {
      return (
        <div className='notes-wrapper'>
          <div className='notes-title'>All Notes</div>
          <div className='notes-outer'>
            {this.state.notes.map(note => (
              <NoteBox key={note._id} text={note.text} title={note.title} />
            ))}
          </div>
        </div>
      );
    }
  }
}


export default withRouter(Note); 