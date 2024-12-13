import axios from 'axios';

const API = axios.create({ baseURL: 'https://portfolio-lgag.onrender.com/api' });

export const fetchProjects = () => API.get('/projects');
