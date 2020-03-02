<template>  
    <!-- Card -->
    <div>
    <div class="card">

    <!-- Card image -->
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">

    <!-- Card content -->
    <div class="card-body">
        <!-- Title -->
        <h4 class="card-title"><a>{{ docName }}</a></h4>
        <!-- Text -->
        <p class="card-text">{{ docDesc }}</p>
        <!-- Button -->
        <mdb-btn color="primary" @click="showDocument">Afficher</mdb-btn>
    </div>

    </div>
    <!-- Card -->

    <!-- Box --> 
    <document-box ref="box" v-show="showMode" v-bind:box-name="docName" v-bind:box-desc="docDesc" v-bind:box-file="docFile"></document-box>
    </div>
</template>

<script>
import DocumentBox from "@/components/boxs/DocumentBox.vue"
import { mdbBtn } from "mdbvue"
import { EventBus } from '@/services/event-bus.js';

export default {
    name: "DocumentComponent",

    components: {
        DocumentBox,   
        mdbBtn 
    },

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
        },

        docDesc: {
            type: String,
            required: false,
            default: 'Sans Description'
        },

        docFile: {
            type: String,
            required: false,
            default: ''
        }
    },

    data() {
        return {
            showMode: false,
        }
    },

    methods: {
        showDocument() {
            this.showMode = true;

            this.$refs.box.showBox();
        }
    }
}
</script>