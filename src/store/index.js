import { createStore } from 'vuex';

   const state = {
        api: 'https://swapi.dev/api/people/1/',
        showAboutPage: false,
        questions: [
          {
            id: 1,
            title: 'Ваш пол',
            img: false,
            answer: ['Мужчина', 'Женщина'],
            colorAnswer: false,
            numberAnswer: false,
          }
        ],
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
    },
    setShowAboutPage(state) {
      state.showAboutPage = true;
      setTimeout(() => {
        const about = document.getElementById('about');
        about.scrollIntoView()
      }, 200)
    }
  }

  const getters = {
      getApi: state => state.api,
      getQuestions: state => state.questions
  }

  export default createStore({
    state,
    getters,
    mutations
  })