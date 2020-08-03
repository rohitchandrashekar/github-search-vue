const axios = require('axios');
axios.defaults.headers.common['accept'] = 'application/vnd.github.mercy-preview+json'
 const httpRequest = {
     get : async (url) => {
         try {
            return await axios.get(url); 
         } catch (error) {
             throw error;
         }
     }
 }
 
 module.exports = httpRequest;