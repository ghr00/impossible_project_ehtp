<template>
    <div class="docs">
        <div class="container border">
            <div class="row">
                <div class="col">
                    <center>
                        <h1>Centre de partage de document</h1>
                    </center>
                </div>
            </div>

            <div class="row">
                <div class="col-10">
                    <div class="alert alert-success" role="alert"> Vous avez recherché tous les documents existants.</div>
                </div>
                <div class="col-2">
                    <!-- <input @change="uploadDocument" id="fileUpload" type="file" hidden > --> <!-- multiple> -->
                    <button @click="importDocument" class="btn btn-outline-success my-2 my-sm-0 float-left" type="button">Importer</button>
                </div>
            </div>

            <div class="row">
                <button class="btn btn-outline-success my-2 my-sm-0" type="button">Importer</button>
            </div>
        </div>
            
        <div class="container border">
            <!-- Affiche tous les documents qui existent -->
            <div class="row" v-for="rowid in docs.length" v-bind:key="rowid"> 
                <div class="col" v-for="(doc, index) in docs" v-bind:key="index">
                    <document-component v-bind:doc-type="doc.image" v-bind:doc-name="doc.name" v-bind:doc-desc="doc.desc" v-bind:doc-file="doc.file"></document-component>
                </div>
            </div>
        </div>

        <document-importer v-show="importMode"></document-importer>
    </div> 
</template>

<script>
// @ is an alias to /src
import CategoryComponent from '@/components/Category.vue'
import DocumentComponent from '@/components/Document.vue'
import DocumentImporter from "@/components/importers/DocumentImporter.vue"

import API from '@/services/Api'
import { EventBus } from '@/services/event-bus.js';
import axios from 'axios'

export default {
    name: 'Docs',
    components: {
        CategoryComponent,
        DocumentComponent,
        DocumentImporter,
    },

    data() {
        return {
            importMode: false,

            categories: [{id : 1,name: "Examens",color: "green"}, {id:2,name: "Rapports de stage",color: "green"}, {id:3,name: "Présentations",color: "green"}, {id:4,name: "GC",color: "green"}, {id:5,name: "Annonces", color: "green"}, {id:6, name: "Informatique", color: "blue"}, {id:7, name: "C++", color: "blue"}],

            docs: [
                { id:0, image: "PNG", name: "Document de test", desc: "Description", author: "GHR00" },
                { id:1, image: "PDF", name: "Examen analyse 2019 SIG/GI", desc: "Description", author: "Random Alaoui" },
                { id:2, image: "PDF", name: "Cours de resistance de materiaux", desc: "Description", author: "Hamid Lambda" }
            ]
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
            
            this.setDocuments(documents);
        }
    },

    mounted(){
        this.update()

        EventBus.$on('removeDocumentBox', () => {
            console.log(`On supprime la box`);

            this.importMode = false;
        });
    },

    methods: {

        importDocument() {
            this.importMode = true;

            EventBus.$emit('showImporter');
        },

        setDocuments(documents) {
            this.docs = documents;

            console.log("this.docs : ", JSON.stringify(this.docs));

            this.$nextTick();
        },
        
        update(){
            this.$socket.client.emit('updateDocuments', "test");
        },

    }
}



</script>