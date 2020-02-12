<template>
    <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" v-bind:placeholder="text" v-bind:aria-label="text">
        <button class="btn btn-dark my-2 my-sm-0" type="submit">{{ text }}</button>
    </form>
</template>

<script>
export default {
    name: "SearchBar",
    
    props: {
        type: {
            type: String,
            required: false,
            default: 'Recherche'
        },

        size: {
            type: String,
            required: false,
            default: 'medium'
        },

        text: {
            type: String,
            required: false,
            default: 'Rechercher'
        }
    },

    methods: {
        readNews(newsNum){
            this.$emit('read', newsNum);
        }
    }
}
</script>
