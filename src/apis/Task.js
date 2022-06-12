import axios from "axios";
const url = process.env.REACT_APP_API_BASEURL;

const Task = {
    add: (body) => {
        return axios.post(`${url}?company_id=`, body, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user-token") } });
    },
    showOne: (id) => {
        return axios.get(`${url}/${id}?company_id=`, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user-token") } });
    },
    edit: (body, id) => {
        return axios.put(`${url}/${id}?company_id=`, body, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user-token") } });
    },
    remove: (id) => {
        return axios.delete(`${url}/${id}?company_id=`, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user.api_token") } });
    },
    listAll: () => {          // used to populate dropdowns
        return axios.get(`${url}?company_id=`, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user-token") } });
    }
}

export default Task;