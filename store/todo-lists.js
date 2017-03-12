import axios from 'axios';

export const state = {
  lists: []
};

export const mutations = {
  initialize(state, data) {
    console.log(state);
    // console.log('update:', data);
    state.lists = data;
    console.log(state);
  },
  add(state, data) {
    console.log(state);
    console.log('add:', data);
    state.lists.push(data);
  }
};

export const actions = {
  async initialize({commit}) {
    const {data} = await axios.get('http://localhost:3000/api/todo-list-overview');
    commit('initialize', data);
  },
  async add({commit}, diff) {
    let {data} = await axios.post('http://localhost:3000/api/todo-lists', diff);
    data = Object.assign({
      count: 0,
      hasChild: false
    }, data);
    commit('add', data);
  }
};