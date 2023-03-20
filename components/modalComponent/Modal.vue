<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="showModal" class="overlay">
        <div class="_modal" :style="modalStyle">
            <div
                v-if="widthHeader"
                class="_modal-header d-flex justify-content-between"
            >
                <h3 class="_modal-header-text">
                    {{ title }}
                </h3>
                <button class="close__btn" @click="$emit('closeModal')">
                    <img
                        src="~/assets/icons/close.svg"
                        alt="close button"
                    />
                </button>
            </div>
            <div class="_modal-content">
                <slot></slot>
                <!-- PASS YOUR OWN MODAL CONTENT HERE -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            require: false,
        },
        modalStyle: {
            type: String,
            require: true,
            default: '',
        },
        title: {
            type: String,
            require: true,
            default: '',
        },
        widthHeader: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        makeToast(variant, text) {
            this.$bvToast.toast(text, {
                title: 'Notification',
                toaster: 'b-toaster-top-center',
                variant,
                solid: true,
            })
        },
    },
}
</script>

<style scoped>
._modal-header-text {
}

.close__btn{
background: #fff;
border: none;
outline: none;
}
</style>
