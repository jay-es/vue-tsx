<script lang="tsx">
import { computed, defineComponent } from 'vue'
import { useTodoStore, Todo } from '../store'

const TodoItem = ({ todo }: { todo: Todo }) => (
  <li class="todo-item">
    <label class={todo.done ? 'is-done' : ''}>
      <input type="checkbox" v-model={todo.done} />
      {todo.id}: {todo.text}
    </label>
  </li>
)

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
.todo-item {
  user-select: none;
}
.todo-item:deep() > .is-done {
  text-decoration: line-through;
}
</style>
