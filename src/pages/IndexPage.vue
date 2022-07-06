<template>
  <q-page class="items-start justify-center bg-gray">
    <div class="row q-mb-md q-pt-none">
      <q-input outlined class="col" square v-model="todo">
        <template v-slot:append>
          <q-btn @click="additem" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <div class="q-pa-md q-pt-none justify-center">
      <q-list v-if="todos.length > 0">
        <q-item-label header>Todo lists</q-item-label>
        <q-item tag="label" v-ripple v-for="task of todos" :key="task.content">
          <q-item-section>
            <q-item-label>{{ task.content }}</q-item-label>
            <q-item-label caption>
              {{ task.description }}
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-checkbox v-model="task.completed" />
          </q-item-section>
        </q-item>
      </q-list>
      <div v-else class="row">no items found</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  // data() {},
  methods: {
    additem() {
      const $q = useQuasar();

      this.todos = [
        ...this.todos,
        {
          id: Math.random(),
          completed: false,
          content: this.todo,
          description: '',
        },
      ];
      this.todo = '';
      $q.notify({
        message: 'New item added by you.',
        caption: '1 second ago',
        color: 'secondary',
      });
    },
  },

  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'Todo one',
        completed: false,
        description:
          'This is just simple example to help you understand the case and find solution for it ',
      },
      {
        id: 2,
        content: 'todo 2',
        completed: false,
      },
    ]);

    const todo = '';
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return {
      todos,
      todo,
      meta,
    };
  },
});
</script>
