<script lang="tsx">
import { computed, defineComponent, PropType } from 'vue'
import { useTodoStore, Todo } from '../store'

const TodoItem = defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup: (props) => {
    const todo = props.todo
    return () => (
      <li class="todo">
        <label class={todo.done && 'done'}>
          <input type="checkbox" v-model={todo.done} />
          {todo.id}: {todo.text}
        </label>
      </li>
    )
  },
})

export default defineComponent({
  name: 'TodoList',
  setup() {
    const todoStore = useTodoStore()
    const todos = computed(() => todoStore.todos)

    return () => (
      <ul>
        {todos.value.map((v) => (
          <TodoItem key={v.id} todo={v} />
        ))}
      </ul>
    )
  },
})
</script>

<style scoped>
.todo {
  user-select: none;
}
.todo:deep() > .done {
  text-decoration: line-through;
}
</style>
