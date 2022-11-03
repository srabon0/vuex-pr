import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 10,
    books: [],
    userData:[],
  },
  getters:{
    totalBook(state){
      return state.books.length
    }
  }
  ,
  mutations: {
    INCREMENT(state) {
      state.counter++;
    },
    DECREMENT(state) {
      state.counter--;
    },
    PUSH_BOOK(state,payload){
        state.books.push(payload)
        localStorage.setItem('booksInLib',JSON.stringify(state.books))
    },
    DELETE_BOOK(state,payload){
        let newbook = state.books.filter((item,index)=>index!=payload)
        state.books = newbook
        localStorage.setItem('booksInLib',JSON.stringify(newbook))
    },
    ADDUSER(state,payload){
        state.userData.push(payload)
    }
  },
  actions: {
    increment(context) {
      context.commit("INCREMENT");
    },
    decrement(context) {
      context.commit("DECREMENT");
    },
    deleteBook(context,data){
        context.commit("DELETE_BOOK",data)
    },
    addBook(context,data){
        let bookData = {
            id:this.state.books.length+1 ,
            name:data
        }
        context.commit("PUSH_BOOK",bookData)
    },
    addUser({commit},userData){
        userData.id = this.state.userData.length
        commit("ADDUSER",userData)
    }

  },
});

export default store;
