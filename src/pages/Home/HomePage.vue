<template>
  <div>this is home page</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const counter = ref(0);
const todos = reactive<Todo>({
  id: 1,
  text: 'Learn Vue.js 3',
  completed: false,
});
</script>
