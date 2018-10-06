import Vue from 'vue';
import Vuex from 'vuex';

import { fetchPosts } from '../api';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state: {
      posts: []
    },
    actions: {
      fetchPosts ({ commit }) {
        return fetchPosts().then(posts => {
          posts.forEach((post, idx) => {
            post.id = idx;
            commit('setPost', { post, idx });
          });
        })
      }
    },
    mutations: {
      setPost (state, { post, idx }) {
        Vue.set(state.posts, idx, post)
      }
    }
  });
}
