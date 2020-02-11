<template>
    <table class="table table-bordered table-dark">
        <tbody>
            <tr class="d-flex">
                <td class="col-2">{{ largeSumImage }}</td> 
                <td>
                    <div class="row">
                        <div class="col"> {{ largeSumName }}</div>
                    </div>
                    <div class="row">
                        <div class="col"> {{ largeSumDesc }}</div>
                    </div>
                    <div class="row">
                        <div class="col"> {{ largeSumAuthor }}</div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script> 
export default {
    name: "LargeSummaryComponent",

    props: {
        largeSumImage: {
            type: String,
            required: false,
            default: 'No IMAGE'
        },

        largeSumName: {
            type: String,
            required: false,
            default: 'Sans nom'
        },

        largeSumDesc: {
            type: String,
            required: false,
            default: 'Sans nom'
        },

        largeSumAuthor: {
            type: String,
            required: false,
            default: 'Sans auteur'
        }


    }
}
</script>