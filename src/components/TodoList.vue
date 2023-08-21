<template>
  <div
    class="h-screen bg-no-repeat bg-contain flex flex-col items-center bg-[#FAFAFA] bg-mobile-light sm:bg-desktop-light"
  >
    <div
      class="flex justify-between pt-12 px-6 w-full sm:max-w-[540px] sm:px-0"
    >
      <img
        src="../assets/icons/icon-todo.svg"
        alt=""
        class="max-w-[109px] max-h-[20px]"
      />
      <img
        src="../assets/icons/icon-moon.svg"
        alt=""
        class="max-w-[20px] max-h-[20px] cursor-pointer"
      />
    </div>

    <div class="mt-10 mx-6 relative">
      <div
        class="w-[20px] h-[20px] border border-[#E3E4F1] absolute top-[12px] left-5 rounded-full"
      ></div>

      <input
        type="text"
        placeholder="Create a new todo..."
        class="w-[327px] sm:w-[540px] h-12 rounded-lg shadow-md px-14 text-xs focus:outline-none bg-white"
      />
    </div>

    <div class="px-5 mt-4 rounded-lg shadow-md w-[327px] sm:w-[540px] bg-white">
      <div>
        <todo-item></todo-item>
      </div>

      <div
        class="flex justify-between pt-4 pb-[22px] font-normal text-[#9495A5] text-xs"
      >
        <p>items left</p>
        <p>completed</p>
      </div>
    </div>

    <div
      class="w-[327px] sm:w-[540px] h-12 rounded-lg shadow-md mt-4 mx-6 flex justify-around items-center font-bold text-[#9495A5] text-sm px-[70px] bg-white"
    >
      <button class="cursor-pointer">All</button>
      <button class="cursor-pointer">Active</button>
      <button class="cursor-pointer">Completed</button>
      <button class="hidden sm:block" @click="clearCompleted()">
        Clear completed
      </button>
    </div>

    <div
      class="mt-10 mb-10 flex justify-center font-normal text-[#9495A5] text-sm"
    >
      <p>Drag and drop to reorder list</p>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
