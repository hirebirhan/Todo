<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
      :todo="todo"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'Todo one',
      },
      {
        id: 2,
        content: 'todo 2',
      },
    ]);
    const todo = '';
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, todo, meta };
  },
});
</script>
