import axios from 'axios'
import config from "../../config";

export const Api =  axios.create({
    baseURL: config.backEndURL
});