import api from '../../api/imgur';
import {router} from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({rootState, commit}) {
        const {token} = rootState.auth; //alt: const token = rootState.auth.token
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },

    async uploadImages({rootState}, images) {
        const {token} = rootState.auth;
        await api.uploadImages(images, token);
        router.push('/');
    }
};

const mutations = {
    setImages: (state, images) => state.images = images
};

export default {
    state,
    getters,
    actions,
    mutations
};