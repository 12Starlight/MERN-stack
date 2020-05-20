import React from 'react';
import NoteBox from '../notes/note_box';
import './profile.css';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.currentUser.id)
    this.props.fetchUserNotes(this.props.currentUser.id); 
  }


  render() {
    const { notes } = this.props; 

    if (notes.length === 0) {
      return (<div>This user has no Notes</div>)
    } else {
      return (
        <div className='outer-profile'>
          <div className='outer-profile-title'>All of this User's Notes</div>
          <div className='outer-profile-notes'>
            {notes.map(note => (
              <NoteBox key={note._id} text={note.text} title={note.title} id={note._id} deletedNote={this.props.deletedNote} note={note} />
            ))}
          </div>
        </div>
      );
    }
  }
}


export default Profile; 