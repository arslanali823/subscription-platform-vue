import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        websites: [],
        loading: false,
        errors: null,
        snackbar: {
            enable: false,
            text: ''
        }
    },
    mutations: {
        setWebsites(state, payload) {
            state.websites = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setErrors(state, payload) {
            state.errors = payload
        },
        clearErrors(state) {
            state.errors = null
        },
        setSnackbar(state, payload) {
            state.snackbar = {
                enable: true,
                text: payload
            }
        },
        clearSnackbar(state) {
            state.snackbar = {
                enable: false,
                text: ''
            }
        }
    },
    actions: {
        async getWebsites({commit}) {
            try {
                commit('setLoading', true)
                const res = await axios.get('http://127.0.0.1:8000/api/websites')
                commit('setWebsites', res.data)
            } catch (err) {
                let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                console.warn("error", message);
                console.log(err.response.data.errors)
                commit('setErrors', err.response.data.errors)
            } finally {
                commit('setLoading', false)
            }
        },
        async subscribe({commit}, payload) {
            try {
                commit('setLoading', true)
                commit('clearErrors')
                const res = await axios.post(
                    `http://127.0.0.1:8000/api/websites/${payload.slug}/subscribe`,
                    {
                        name: payload.name,
                        email: payload.email
                    }
                )
                console.log(res.data)
                commit('setSnackbar', res.data.message)
            } catch (err) {
                commit('setErrors', err.response.data.errors)
                commit('setSnackbar', err.response.data.message)
            } finally {
                commit('setLoading', false)
            }
        },
        clearError({commit}) {
            commit('clearError')
        },
    },
    getters: {
        websites: state => state.websites,
        getWebsite(state, payload) {
            return state.websites.find(i => i.slug === payload.slug)
        },
        errors: state => state.errors,
        loading: state => state.loading,
    }
})
