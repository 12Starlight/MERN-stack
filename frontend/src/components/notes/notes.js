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
    // debugger; 
    this.props.fetchNotes();
  }

  // componentWillReceiveProps(newState) {
  //   // debugger; 
  //   this.setState({ notes: newState.notes });
  // }
  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.notes !== prevState.notes) {
  //     debugger; 
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // debugger; 
  //   if (this.props.history.location.pathname === prevProps.history.location.pathname && prevState.notes !== this.state.notes) {
  //     debugger; 
  //     this.setState((prevState, props) => { 
  //       return { notes: prevState.notes.concat(props.notes) }
  //     }); 
  //   } 
  // }


  render() {
    if (this.props.notes.length < 1) {
      return (<div>There are no notes</div>)
    } else {
      // debugger; 
      return (
        <div className='notes-wrapper'>
          <div className='notes-title'>All Notes</div>
          <div className='notes-outer'>
            {this.props.notes.map(note => (
              <NoteBox key={note._id} text={note.text} title={note.title} id={note._id} deletedNote={this.props.deletedNote} coloredNote={this.props.coloredNote} />
            ))}
          </div>
        </div>
      );
    }
  }
}


export default withRouter(Note); 