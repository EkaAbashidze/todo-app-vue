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
    return {
      newItem: "",
      list: [
        { text: "Jog around the park 5x", active: true },
        { text: "10 minutes meditation", active: true },
        { text: "Read for an hour", active: true },
      ],
      listType: "All",
      draggingIndex: null,
      dragOverIndex: null,
      isDarkMode: false,
    };
  },
  computed: {
    inactiveCount() {
      return this.list.filter((item) => !item.active).length;
    },
    activeCount() {
      return this.list.filter((item) => item.active).length;
    },
    filterList() {
      if (this.listType === "Active") {
        return this.list.filter((item) => item.active);
      } else if (this.listType === "Completed") {
        return this.list.filter((item) => !item.active);
      } else {
        return this.list;
      }
    },
  },
  methods: {
    addItem() {
      this.list.unshift({ text: this.newItem, active: true });
      this.newItem = "";
    },
    removeItem(index) {
      this.list.splice(index, 1);
    },
    toggleActive(index) {
      this.list[index].active = !this.list[index].active;
    },
    modifyList(type) {
      this.listType = type;
      console.log(this.listType);
    },
    handleDragStart(item, index) {
      this.draggingIndex = index;
    },
    handleDragOver(index) {
      this.dragOverIndex = index;
    },
    handleDragEnd() {
      if (this.draggingIndex !== null && this.dragOverIndex !== null) {
        const draggedItem = this.list.splice(this.draggingIndex, 1)[0];
        this.list.splice(this.dragOverIndex, 0, draggedItem);
      }
      this.draggingIndex = null;
      this.dragOverIndex = null;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    clearCompleted() {
      this.list = this.list.filter((item) => item.active);
    },
  },
};
</script>

<style>
.dragging {
  opacity: 0.2;
}

.drag-over {
  border-top: 1px dashed #3a7cfd;
  border-bottom: 1px dashed #3a7cfd;
}
</style>
