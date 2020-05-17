import axios from 'axios';


export const getNotes = () => {
  return axios.get('/api/notes')
};

export const getUserNotes = (id) => {
  return axios.get(`/api/notes/user/${id}`)
};

export const writeNote = (data) => {
  return axios.post('/api/notes/', data)
}; 

export const deleteNote = (noteId) => {
  return axios.delete(`/api/notes/${noteId}`)
}