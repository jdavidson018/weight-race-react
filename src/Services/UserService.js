import axios from 'axios';
import { host } from '../Data/utilityVariables';

const USER_API_BASE_URL = `${host}/api/user`;

class UserService {

    getUsers = async () => {
        try {
            const resp = await axios.get(USER_API_BASE_URL);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    getUserFriends = async (userUid) => {
        let resp = await this.getUsers();
        return resp.filter(x => x.userUid.toString() !== userUid);
    }

    getUser = async (id) => {
        try {
            const resp = await axios.get(USER_API_BASE_URL + '/' + id);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    getUserByUid = async (userUid) => {
        try {
            const resp = await axios.get(USER_API_BASE_URL + '/GetUserByUID/' + userUid);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }


    updateUser(user, userId) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()