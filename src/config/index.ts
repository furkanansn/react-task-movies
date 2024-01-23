/**
 * MAIN APP CONFIG
 */

const frontEndURL = process.env.REACT_APP_FRONT_END_URL || "http://localhost:3000";
const backEndURL = process.env.REACT_APP_BACK_END_URL || "http://localhost:5001";
export default {
    environment: process.env.REACT_APP_NODE_ENV,
    frontEndURL,
    backEndURL,
    appName : "Movie FA"
};
