<template>
    <li class="nav-item">
        <!-- <a class="nav-link" v-bind:href=href>{{ text }}</a> -->
        <router-link class="nav-link" active-class="active" v-bind:to=href>{{ text }}</router-link>
    </li>    
</template>

<script>
export default {
    name: "MenuItem",

    props: {
        text: {
            type: String,
            required: false,
            default: 'NULL'
        },

        href: {
            type: String,
            required: false,
            default: '#'
        }
    }
}
</script>