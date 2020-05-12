import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteBox from './note_box';


class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(newState) {
    this.setState({ notes: newState.notes });
  }


  render() {
    if (this.state.notes.length === 0) {
      return (<div>There are no notes</div>)
    } else {
      return (
        <div>
          <h2>All Notes</h2>
          {this.state.notes.map(note => (
            <NoteBox key={note._id} text={note.text} title={note.title} />
          ))}
        </div>
      );
    }
  }
}


export default withRouter(Note); 