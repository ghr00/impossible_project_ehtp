<template>
    <table class="table table-bordered table-dark">
        <tbody>
            <tr class="d-flex">
                <td class="col-4">{{ sumImage }}</td>
            </tr>
            <tr class="d-flex">
                <td class="col-4">{{ sumName }}</td>
            </tr>
            <tr class="d-flex">
                <td class="col-4">{{ sumAuthor }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "SummaryComponent",

    props: {
        sumImage: {
            type: String,
            required: false,
            default: 'No IMAGE'
        },

        sumName: {
            type: String,
            required: false,
            default: 'Sans nom'
        },

        sumAuthor: {
            type: String,
            required: false,
            default: 'Sans auteur'
        }
    }
}
</script>