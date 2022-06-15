import axios from 'axios'

const API = axios.create({baseURL: "https://pfn-lagos.herokuapp.com/api"});

//Route
// export const getAll = () => API.get("/allPosts/")
export const createPost = (writeData) => API.post("/post/", writeData)
export const getAllPost = () => API.get("/post/")
// export const getAllPost_others = () => API.get("/others/")
export const getPostById = (id) => API.get(`/post/${id}`)
export const updatePost = (id) => API.patch(`/post/${id}`)
export const likePost = (value, id) => API.patch(`/post/${id}/likePost`, {value})
export const deletePost = (id) => API.delete(`/post/${id}`)
export const comment = (value, id) => API.post(`/post/${id}/commentPost`, {value})

//Auth Route
export const register = (formData) => API.post("/auth/register", formData)
export const login = (loginData) => API.post("/auth/login", loginData)
export const getUserbyId = (id) => API.get(`/auth/${id}`)
export const updateUser = (id) => API.get(`/auth/${id}`)
export const getUsers = () => API.get('/auth/')
export const deleteUser = (id) => API.delete(`/auth/delete/${id}`)