import httpClient from "../axios/http-common";

const readNotes = () => {
  return httpClient.get("/api/readNotes");
};

const createNote = (note) => {
  return httpClient.post("/api/createNote", note);
};

const get = (id) => {
  return httpClient.get(`/api/notes/${id}`);
};

const remove = (id) => {
  return httpClient.delete(`/api/notes/${id}`);
};

const update = (data) => {
  return httpClient.put(`/api/notes`, data);
};

export default { readNotes, createNote, get, remove, update };
