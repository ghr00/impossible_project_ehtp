<template>  
    <!-- Card -->
    <div class="card">

    <!-- Card image -->
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">

    <!-- Card content -->
    <div class="card-body">

        <!-- Title -->
        <h4 class="card-title"><a>{{ docName }}</a></h4>
        <!-- Text -->
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
        <!-- Button -->
        <a href="#" @click="getDocumentsFromServer" class="btn btn-primary">Button</a>

    </div>

    </div>
    <!-- Card -->
</template>

<script>

import { EventBus } from '../services/event-bus.js';

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
            docs: []
        }
    },

    sockets: {
        connect() {
            console.log('socket connected')
        },
        customEmit(val) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        },
        receiveDocumentsFromServer(documents) {
            console.log("Recepetion:", JSON.stringify(documents));
            
            /* var tmp = this.docs.concat(documents);

            this.docs = tmp; */
            EventBus.$emit('receiveDocumentsFromServer', documents);
        }
    },

    methods: {
        getDocumentsFromServer(){

            // this.$socket.client is `socket.io-client` instance
            this.$socket.client.emit('updateDocuments', "test");
            
        }
    }

}
</script>