<template>
    <div class="input-group">
        <div class="input-block" v-for="value in options">
            <input type="radio" :value="value" :id="value" @change="$emit('update:clientAnswer', $event.target.value)"
                class="input-block__input" name="radio-input" />
            <label :for="value" class="input-block__label">
                {{ value }}
            </label>
        </div>
    </div>
</template>

<script setup>
  defineProps({
    options: {
      required: true,
      type: Array,
    },
  })
</script>

<style scoped>
    .input-group {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .input-block {
        width: 100%;
        background-color: rgba(242, 243, 243, 0.15);
        margin-bottom: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .input-block__input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .input-block__input+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .input-block__label {
        padding: 0 2.8rem;
        color: white;
        font-family: PT Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.3rem;
        line-height: 58px;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        width: 100%;
        transform: 1s;
    }


    .input-block__input +label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 50%;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
        transition: 1s;
    }

    .input-block__input:checked +label::before {
        background: #2950C2;
        border: 1px solid #272727;
    }

    .input-block__input:checked +label {
        background-color: var(--attention-color);
        color: black;
    }

    label {
        cursor: pointer;
    }
</style>