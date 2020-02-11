<template>
    <table class="table table-bordered table-dark">
        <tbody>
            <tr>
                <td>{{ qstContent }}</td>
            </tr>
            <tr>
                <td>{{ qstResponses }}</td>
            </tr>
            <tr>
                <td>{{ qstSeen }}</td>
            </tr>
            <tr>
                <td>{{ qstAuthor }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "LargeQuestionComponent",
    props: {
        qstContent: {
            type: String,
            required: false,
            default: '/'
        },

        qstResponses: {
            type: Number,
            required: false,
            default: 0
        },

        qstSeen: {
            type: Number,
            required: false,
            default: 0
        },

        qstAuthor: {
            type: String,
            required: false,
            default: 'Sans auteur'
        }
    }
}
</script>