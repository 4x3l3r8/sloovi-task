import axios from "axios";
const url = process.env.REACT_APP_API_BASEURL;

const User = {
    listAll: () => {          // used to populate dropdowns
        return axios.get(`${url}/team?product=outreach&company_id=`, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user-token") } });
    }
}

export default User;