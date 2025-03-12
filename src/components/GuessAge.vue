<template>
  <h1>{{ title }}</h1>
  <div class="card">
    <div style="width: 400px; height: 130px; margin-top: 20px; border-style: dotted">
      <br />
      <span>Firstmame: {{ data.firstname }}</span> <br />
      <span>Age: {{ data.age }}</span> <br />
    </div>
    <br /><br />
    <label> Enter Firstname </label><br />
    <input
      type="text"
      v-model="data.search"
      style="font-size: 20px; border-radius: 10px"
      placeholder=" Name ..."
    />
    <br />
    <br />
    <button type="button" @click="getAge">Guess Age</button>
    <br />
    <br />
    <br />
    <input type="radio" value="pop" /> <label>Save my data</label>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
defineProps({
  title: { type: String, default: 'Guess Age', required: true }
})

const data = reactive({
  search: '',
  firstname: '',
  age: ''
})

const getAge = () => {
  fetch('https://api.agify.io/?name=' + data.search)
    .then((response) => response.json())
    .then((res) => {
      data.age = res.age
      data.firstname = res.name
      data.search = ''
    })
}
</script>
