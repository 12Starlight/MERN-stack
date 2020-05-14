import React from 'react';


class NoteBox extends React.Component {
  render() {
    return (
      <div >
        <h1>{this.props.title}</h1>
        <h3>{this.props.text}</h3>
      </div>
    )
  }
}


export default NoteBox; 