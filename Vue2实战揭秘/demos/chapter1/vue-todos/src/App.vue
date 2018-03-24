<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul class="todos">
      <li v-for="(todo,index) in todos" :id="index" :class="{'checked':todo.done}">
        <label> {{index+1}}.{{todo.value}} </label>
        <time>{{todo.created|date}}</time>
      </li>
    </ul>
  </div>
</template>

<script>
  import './assets/site.less'
  import './assets/todo.less'
  import moment from 'moment'
  import 'moment/locale/zh-cn'

  export default {
    name: 'app',
    data() {
      return {
        title: 'vue-todos',
        todos: [
          {value: '阅读一本关于前端开发的书', done: false, created: Date.now()},
          {value: '补充范例代码', done: true, created: Date.now() + 300000},
          {value: '写心得', done: false, created: Date.now() - 30000000}
        ]
      }
    },
    filters: {
      date(val) {
        return moment(val).calendar();
      }
    }
  }
</script>

<style>

</style>
