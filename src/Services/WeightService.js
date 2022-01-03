import axios from 'axios';

// Local/Dev
// const WWIGHT_API_BASE_URL = "http://localhost:5241/api/weight";

// Production
const WWIGHT_API_BASE_URL = "http://157.245.115.191/api/weight";

class WeightService {

    getWeights = async () => {
        try {
            const resp = await axios.get(WWIGHT_API_BASE_URL);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    getWeightById = async (weightId) => {
        try {
            const resp = await axios.get(WWIGHT_API_BASE_URL + '/' + weightId);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    createWeight(weight) {
        return axios.post(WWIGHT_API_BASE_URL, weight);
    }


    updateWeight(weight, weightId) {
        return axios.put(WWIGHT_API_BASE_URL + '/' + weightId, weight);
    }

    deleteWeight(weightId) {
        return axios.delete(WWIGHT_API_BASE_URL + '/' + weightId);
    }
}

export default new WeightService()