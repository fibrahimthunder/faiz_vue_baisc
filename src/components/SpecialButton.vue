<template>
  <button class="btn" :class="btnClass" @click="$emit('click')">
    <span v-if="icon" class="btn-icon">
      <i :class="icon"></i>
    </span>
    <span class="btn-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default' // You can add more variants like 'primary', 'secondary', etc.
    }
  },
  computed: {
    btnClass() {
      return `btn-${this.variant}`;
    }
  }
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-default {
  background-color: #fff;
  color: #333;
}

.btn-icon {
  margin-right: 0.5rem;
}
</style>
