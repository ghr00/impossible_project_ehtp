<template>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ categoryName }}</button>
</template>

<script>
export default {
    name: "Category",

    props: {
        categoryId: {
            type: Number,
            required: false,
            default: -1
        },

        categoryName: {
            type: String,
            required: false,
            default: 'Sans nom'
        },

        categoryColor: {
            type: String,
            required: false,
            default: 'red'
        }
    }
}
</script>