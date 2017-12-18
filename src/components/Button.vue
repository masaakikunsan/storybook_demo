<template>
  <button
    @click="handleClick"
    :disabled="disabled||false"
    :class="[
    'button',
    'button-' + (disabled ? 'disabled' : kind),
    size  ? 'button-'+size : 'button-normal'
    ]"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    kind: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onclick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="stylus">
.button {
  font-size: 14px;
	font-weight: bold;
	border: solid 1px;
	border-radius: 5px;
	margin: 10px 10px 10px 0;
	padding: 2px 6px 3px;
	outline: none;
	cursor: pointer;
	transition: all 0.3s ease-out;
	-webkit-font-smoothing: antialiased;

  &:hover {
    opacity: 0.5;
  }

  &-minimum{
  width: 120px;
  height: 45px;
  }

  &-small{
    width: 140px;
    height: 45px;
  }

  &-normal{
    width: 180px;
    height: 50px;
  }


  &-large{
    width: 220px;
    height: 60px;
    font-size: 19px;
  }
  /* Button full*/

  &-full{
    width: 100%;
    height: 45px;
  }

  &-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }

  &-primary {
    background-color: #337ab7;
    border-color: #2e6da4;
    color: #fff;
  }

  &-success {
    background-color: #5cb85c;
    border-color: #4cae4c;
    color: #fff;
  }

  &-info {
    background-color: #5bc0de;
    border-color: #46b8da;
    color: #fff;
  }

  &-warning {
    background-color: #f0ad4e;
    border-color: #eea236;
    color: #fff;
  }

  &-danger {
    background-color: #d9534f;
    border-color: #d43f3a;
    color: #fff;
  }

  &-dark {
    color: #fff;
    background: #2A3C4D;
  }

  &-disabled {
  	color: #aaa;
  	background: #ddd;
  	border-color: #ddd;
  	cursor: default;
  }

  span {
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
