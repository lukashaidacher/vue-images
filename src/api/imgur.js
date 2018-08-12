import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '92ac9b705a700cc';
//const CLIENT_SECRET = '0f8bd0c25b34ad1f6089c1188a4870580b869f73';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },

    fetchImages(token) {
        return axios.get('/3/account/me/images', {
            baseURL: ROOT_URL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    },
    uploadImages(images, token) {
        const promisis = Array.from(images)
            .map(image => {
                const formData = new FormData();
                formData.append('image', image)

                return axios.post(`${ROOT_URL}/3/image`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            });

        return Promise.all(promisis);
    }
};
