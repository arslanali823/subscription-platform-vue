import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        websites: [],
        loading: false,
        error: null
    },
    mutations: {
        setWebsites(state, payload) {
            state.websites = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        getWebsites({commit}) {
            commit('setLoading', true)
            commit('setLoading', false)
        },
        clearError({commit}) {
            commit('clearError')
        }
    },
    getters: {
        websites: state => state.websites,
        error: state => state.error,
        loading: state => state.loading,
    }
})
