<template>
  <div>
    <!-- <mdb-btn color="primary" @click.native="modal = true">Launch demo modal</mdb-btn> -->
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Importer un document</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-input type="text" label="Le nom du document" v-model="name"/>
        <mdb-textarea label="La description" v-model="desc"/>
        <mdb-input type="text" id="fileName" label="Le fichier importé" v-bind:value="fileName" disabled/>
        <mdb-btn color="primary" @click="importDocument">Importer</mdb-btn>
        <input @change="uploadDocument" id="fileUpload" type="file" hidden >
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="modal = false">Annuler</mdb-btn>
        <mdb-btn color="primary" @click="sendDocument">Confirmer</mdb-btn>
        
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>

import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbTextarea, mdbInput } from 'mdbvue';
import { EventBus } from '@/services/event-bus.js';
import axios from 'axios'

export default {   
    name: "DocumentImporter",

    components: {
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn,
      mdbTextarea, 
      mdbInput
    },
    
   props: {
        fileName: "Aucun",
        
    }, 

    data() {
      return {
        modal: false,

        file: null,
        name: "Aucun nom",
        desc: "Aucune description"
      };
    }, 

    mounted(){
        EventBus.$on('showImporter', () => {
            console.log(`On montre l'importer`);

            this.modal = true;
        });
    },

    methods: {
        sendDocument() {
            let formData = new FormData();

            if(this.file != null) {
                formData.append('file', this.file);

                formData.append('name', this.name);//this.name);
                formData.append('desc', this.desc);

                axios.post( 'http://localhost:5000/single-file',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(function(){
                    console.log('SUCCESS!!');
                    })
                    .catch(function(){
                    console.log('FAILURE!!');
                });

                EventBus.$emit('removeDocumentBox');

                this.file = null;
            } 
        },

        uploadDocument(event) {
            console.log(event.target.files[0]);

            this.file = event.target.files[0];
            //this.file = this.$refs.file.files[0];    
        },

        importDocument() {
            document.getElementById("fileUpload").click()
        },
    }
}
</script>