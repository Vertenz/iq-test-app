<template>
  <label :for="option">
    <input
      type="radio"
      :value="option"
      :id="option"
      @change="$emit('update:clientAnswer', $event.target.value)"
      name="radio-input"
    />
    {{ option }}
  </label>
</template>

<script setup>
defineEmits(['update:clientAnswer'])
defineProps({
    option: {
      required: true,
      type: String,
    },
})
</script>

<style scoped>
label {
  cursor: pointer;
}
</style>