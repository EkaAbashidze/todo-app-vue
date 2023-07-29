<template>
  <div
    class="h-full bg-mobile-light bg-no-repeat bg-contain bg-[#FAFAFA] flex flex-col items-center"
  >
    <div class="flex justify-between pt-12 px-6 w-full">
      <img
        src="../assets/icons/icon-todo.svg"
        alt=""
        class="max-w-[109px] max-h-[20px]"
      />
      <img
        src="../assets/icons/icon-moon.svg"
        alt=""
        class="max-w-[20px] max-h-[20px]"
      />
    </div>

    <div class="mt-10 mx-6 relative">
      <div
        class="w-[20px] h-[20px] border border-[#E3E4F1] absolute top-[12px] left-5 rounded-full"
      ></div>
      <img
        src="../assets/icons/icon-check.svg"
        alt=""
        class="absolute top-[17px] left-[20px]"
      />
      <input
        type="text"
        placeholder="Create a new todo..."
        class="w-[327px] h-12 rounded-lg bg-white shadow-md px-14 text-xs"
        v-model="newItem"
        @keyup.enter="addItem"
      />
    </div>

    <div class="px-5 mt-4 bg-white rounded-lg shadow-md w-[327px]">
      <todo-item
        v-for="(item, index) in filterList"
        :key="index"
        :item="item"
        :active="item.active"
        @remove-item="removeItem(index)"
        @toggle-active="toggleActive(index)"
      ></todo-item>

      <div
        class="flex justify-between pt-4 pb-[22px] font-normal text-[#9495A5] text-xs"
      >
        <p>{{ inactiveCount }} items left</p>
        <p>{{ activeCount }} completed</p>
      </div>
    </div>

    <div
      class="w-[327px] h-12 rounded-lg bg-white shadow-md mt-4 mx-6 flex justify-around items-center font-bold text-[#9495A5] text-sm px-[70px]"
    >
      <button
        @click="modifyList('All')"
        :class="{ 'text-[#3A7CFD]': listType === 'All' }"
        class="cursor-pointer"
      >
        All
      </button>
      <button
        @click="modifyList('Active')"
        :class="{ 'text-[#3A7CFD]': listType === 'Active' }"
        class="cursor-pointer"
      >
        Active
      </button>
      <button
        @click="modifyList('Completed')"
        :class="{ 'text-[#3A7CFD]': listType === 'Completed' }"
        class="cursor-pointer"
      >
        Completed
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
  },
};
</script>
