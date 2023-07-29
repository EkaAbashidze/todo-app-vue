<template>
  <div
    class="border-b border-b-[#E3E4F1] h-12 flex items-center gap-x-3 justify-between"
  >
    <div class="flex items-center gap-x-3">
      <button class="relative cursor-pointer" @click="toggleActive">
        <div
          :class="{
            'bg-gradient-to-br from-[#55DDFF] to-[#C058F3]': item.active,
          }"
          class="w-[20px] h-[20px] border border-[#E3E4F1] rounded-full"
        ></div>
        <img
          src="../assets/icons/icon-check.svg"
          alt=""
          class="absolute left-[4.5px] top-[6px]"
        />
      </button>
      <p
        :class="{
          'text-[#494C6B]': !item.active,
          'text-[#D1D2DA]  line-through': item.active,
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
  },
  methods: {
    toggleActive() {
      this.$emit("toggle-active", !this.active);
    },
  },
};
</script>
