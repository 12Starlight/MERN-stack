import React from 'react';
import NoteBox from '../notes/note_box';
import './profile.css';


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    console.log(this.props.currentUser.id)
    this.props.fetchUserNotes(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ notes: newState.notes });
  }


  render() {
    if (this.state.notes.length === 0) {
      return (<div>This user has no Notes</div>)
    } else {
      return (
        <div className='outer-profile'>
          <h3>All of this User's Notes</h3>
          {this.state.notes.map(note => (
            <NoteBox key={note._id} text={note.text} title={note.title} />
          ))}
        </div>
      );
    }
  }
}


export default Profile; 