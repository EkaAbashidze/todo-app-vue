<template>
  <div
    class="border-b border-b-[#E3E4F1] h-12 flex items-center gap-x-3 justify-between cursor-pointer"
  >
    <div class="flex items-center gap-x-3">
      <button class="relative cursor-pointer">
        <div
          class="w-[20px] h-[20px] border border-[#E3E4F1] rounded-full"
        ></div>
        <img
          src="../assets/icons/icon-check.svg"
          alt=""
          class="absolute left-[4.5px] top-[6px]"
        />
      </button>
      <p class="font-normal text-xs">TODO</p>
    </div>
    <img
      src="../assets/icons/icon-cross.svg"
      alt=""
      class="w-3 h-3 cursor-pointer"
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
