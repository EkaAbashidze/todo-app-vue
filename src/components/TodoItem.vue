<template>
  <div
    draggable="true"
    @dragstart="handleDragStart"
    @dragover="handleDragOver"
    @dragend="handleDragEnd"
    :class="{ 'border-b-[#4D5067]': dark }"
    class="border-b border-b-[#E3E4F1] h-12 flex items-center gap-x-3 justify-between cursor-pointer"
  >
    <div class="flex items-center gap-x-3">
      <button class="relative cursor-pointer" @click="toggleActive">
        <div
          :class="{
            'bg-gradient-to-br from-[#55DDFF] to-[#C058F3]': !item.active,
            'border-[#4D5067]': dark,
          }"
          class="w-[20px] h-[20px] border border-[#E3E4F1] rounded-full"
        ></div>
        <img
          v-if="!item.active"
          src="../assets/icons/icon-check.svg"
          alt=""
          class="absolute left-[4.5px] top-[6px]"
        />
      </button>
      <p
        :class="{
          'text-[#494C6B]': item.active,
          'text-[#D1D2DA]  line-through': !item.active,
          'text-[#C8CBE7]': dark,
          'text-[#4D5067]': dark && !item.active,
        }"
        class="font-normal text-xs"
      >
        {{ item.text }}
      </p>
    </div>
    <img
      src="../assets/icons/icon-cross.svg"
      alt=""
      class="w-3 h-3 cursor-pointer"
      @click="$emit('remove-item')"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    dark: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleActive() {
      this.$emit("toggle-active", !this.item.active);
    },
    handleDragStart(event) {
      this.$emit("dragstart", this.item, this.index);
    },
    handleDragOver(event) {
      this.$emit("dragover", this.index);
    },
    handleDragEnd() {
      this.$emit("dragend");
    },
  },
};
</script>
