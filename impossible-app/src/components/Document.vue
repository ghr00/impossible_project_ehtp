<template>
    <table class="table table-bordered table-dark">
        <tbody>
            <tr class="d-flex">
                <td class="col-4">{{ docType }}</td>
            </tr>
            <tr class="d-flex">
                <td class="col-4">{{ docName }}</td>
            </tr>
        </tbody>
    </table>     
</template>

<script>
export default {
    name: "DocumentComponent",

    props: {
        docType: {
            type: String,
            required: false,
            default: 'PDF'
        },

        docName: {
            type: String,
            required: false,
            default: 'Sans nom'
        }
    },

    data() {
        return {
            news: [{"name" : "News 1","header" : "News 1 header","body" : "News 1 news info"}, {"name" : "News 2","header" : "News 2 header","body" : "News 2 news info"}, {"name" : "News 3","header" : "News 3 header","body" : "News 3 news info"}],
        }
    },

    methods: {
        readNews(newsNum){
            this.$emit('read', newsNum);
        }
    }
}
</script>