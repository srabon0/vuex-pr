<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="decrement">delete --</button>
    <p>The count : {{ counts }}</p>
    <button @click="increment">add++</button>
    <br /><br />
    <div>
      <h2>Book holders and Total books  {{totalBook}}</h2>
      <ul>
        <li :key="index" v-for="(book, index) in bookList" > {{index+1}}. {{ book.name}} <button @click="deleteBook(index)" >delete</button> </li>
      </ul>
    </div>
<div>
  <h1> User Holder</h1>
  <ul>
    <li v-for="(user,index) in users" :key="index" > {{index+1}}. {{ user.name }}  </li>
  </ul>
</div>
    <br />
    <input type="text" v-model="bookname" />
    <button @click="addBook(bookname)">Add book</button>
    <br><br><br><br><br>
    <div style="border:1px solid black; width:350px; height:350px">
    <p>User Name :</p>
    <input type="text" v-model="name">
    <p>User pass:</p>
    <input type="password" v-model="pass" >
    <button @click = 'addUser'> add user</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState,mapGetters} from 'vuex';
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
  data() {
    return {
      bookname: "",
      name:"",
      pass:"",
      users:this.$store.state.userData
    };
  },
  computed: {
    //find all the state in the store
      ...mapState({
        counts:"counter",
        bookList:"books"
      }),
      //find all the computed proerty for vuex named getters findall the getters
      ...mapGetters({
        totalBook:"totalBook",
      })
    ,
    counts() {
      return this.$store.state.counter;
    },
    bookList() {
      return this.$store.state.books;
    },
  },
  methods: {
    //find all the action in the store.js
    ...mapActions({
      deleteBook:'deleteBook',
      increment : 'increment',
      decrement : 'decrement',
      addBook:'addBook',
    }),
    deleteBook(id){
      return this.$store.dispatch("deleteBook",id)
    },
    addBook(data){
      return this.$store.dispatch("addBook",data)
    },
    increment(){
      return this.$store.dispatch("increment")
    },
    decrement(){
      return this.$store.dispatch("decrement")
    },
    addUser(){
      let userData = {
        name:this.name,
        pass:this.pass
      }
      return this.$store.dispatch('addUser',userData)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
