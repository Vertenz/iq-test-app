import { createStore } from 'vuex';

   const state = {
        api: 'https://swapi.dev/api/people/1/',
        showAboutPage: false,
        sex: '',
        age: '',
        choiceExtra: '',
        choiceNextNumber: '',
        choiceColor: '',
        choiceCity: '',
        choiceFigure: '',
        choiceHabit: '',
        choiceGeometric: '',
        choiceCorrectNumber: '',
    }

  const mutations = {
    setAnswer(state, property = []) {
      state[property[0]] = property[1]
  }
}

  const getters = {
      getApi: state => state.api
  }

  export default createStore({
    state,
    getters,
    mutations
  })