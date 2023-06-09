<template>
  <div class="input-holder">
    <input 
      required
      :type="password ? 'password' : 'text'"
      :value="modelValue"
      @input="event => emit('update:modelValue', (event.target as HTMLInputElement).value)"
      @keydown.enter="emit('confirm')" 
    />
    <span class="input-bar"></span>
    <label>{{ placeholder }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: { type: String },
  placeholder: {
    type: String,
    default: "请在此输入",
  },
  password: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['confirm', 'update:modelValue'])
</script>

<style scoped>
.input-holder {
  margin-top: 32px;
  text-align: left;
  position: relative;
}

input {
  width: 100%;
  border: none;
  display: block;
  font-size: 18px;
  padding: 10px 10px 10px 0;
  background-color: transparent;
  border-bottom: 1px solid #757575;
}

input:focus {
  outline: none;
}

label {
  top: 10px;
  color: #999;
  font-size: 16px;
  position: absolute;
  font-weight: normal;
  pointer-events: none;
  transition: 0.3s ease all;
  -moz-transition: 0.3s ease all;
  -webkit-transition: 0.3s ease all;
}

/* active state */
input:focus~label,
input:valid~label {
  top: -20px;
  font-size: 14px;
  color: #646464;
}

.input-bar {
  width: 100%;
  display: block;
  position: relative;
}

.input-bar:before {
  left: 0%;
  width: 0;
  bottom: 1px;
  content: "";
  height: 2px;
  position: absolute;
  background: #646464;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus~.input-bar:before {
  width: 100%;
}
</style>
