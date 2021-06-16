<script lang="tsx">
import { computed, defineComponent, ref } from 'vue'
import TodoList from './components/TodoList.vue'
import { useTodoStore } from './store'
import logo from './assets/logo.png'

export default defineComponent({
  name: 'App',
  setup() {
    const todoStore = useTodoStore()
    const text = ref('')
    const count = computed(() => todoStore.count)
    const completedCount = computed(() => todoStore.completedCount)
    const handleClick = () => {
      todoStore.add(text.value)
      text.value = ''
    }

    return () => (
      <>
        <img alt="Vue logo" src={logo} />
        <div>
          <input type="text" v-model={text.value} />
          <button type="button" onClick={handleClick} disabled={!text.value}>
            Add
          </button>
        </div>

        <TodoList />

        <div>
          Total: {count.value} / Completed:{completedCount.value}
        </div>
      </>
    )
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
