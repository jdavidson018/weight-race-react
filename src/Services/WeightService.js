import axios from 'axios';

// Local/Dev
const WEIGHT_API_BASE_URL = "http://localhost:5241/api/weight";
// Production
// const WEIGHT_API_BASE_URL = "https://weightraceapi.com/api/weight";

class WeightService {

    getWeights = async () => {
        try {
            const resp = await axios.get(WEIGHT_API_BASE_URL);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    getUserWeights = async (userId) => {
        try {
            const resp = await axios.get(WEIGHT_API_BASE_URL + '/GetUserWeights/' + userId);
            console.log("Going for it");
            console.log(resp);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    getWeightById = async (weightId) => {
        try {
            const resp = await axios.get(WEIGHT_API_BASE_URL + '/' + weightId);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    createWeight(weight) {
        return axios.post(WEIGHT_API_BASE_URL, weight);
    }


    updateWeight(weight, weightId) {
        return axios.put(WEIGHT_API_BASE_URL + '/' + weightId, weight);
    }

    deleteWeight(weightId) {
        return axios.delete(WEIGHT_API_BASE_URL + '/' + weightId);
    }
}

export default new WeightService()