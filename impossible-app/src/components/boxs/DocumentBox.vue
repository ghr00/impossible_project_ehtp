<template>
  <div>
    <!-- <mdb-btn color="primary" @click.native="modal = true">Launch demo modal</mdb-btn> -->
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>{{ boxName }}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-input type="text" label="Le nom du document" v-model="boxName" disabled/>
        <!-- <mdb-textarea label="La description" v-model="boxDesc"/> -->
        <p class="lead text-left">Nombre de telechargement :</p>
        <p class="lead text-left">{{ boxDesc }}</p>
        <!-- <mdb-input type="text" id="fileName" label="Le fichier importé" v-bind:value="fileName" disabled/> -->
        <mdb-btn color="primary" @click="downloadDocument">Telecharger</mdb-btn>
        <!-- <input @change="uploadDocument" id="fileDownload" type="file" hidden > -->
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="modal = false">Annuler</mdb-btn>
<!--         <mdb-btn color="primary">Confirmer</mdb-btn>
         -->
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>

import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbTextarea, mdbInput } from 'mdbvue';
import { EventBus } from '@/services/event-bus.js';
import axios from 'axios'

export default {   
    name: "DocumentBox",

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
        boxName: {
            type: String,
            required: false,
            default: 'Sans nom'
        },

        boxDesc: {
            type: String,
            required: false,
            default: 'Sans Description'
        },

        boxFile: {
            type: String,
            required: false,
            default: ''
        }
    }, 

    data() {
      return {
        modal: false,

        /* name: "Aucun nom", */
        /* desc: "Aucune description" */
      };
    }, 

    mounted(){
        /* this.$on('showBox', () => {
            console.log(`On montre la box`);

            this.modal = true;
        }); */

    },

    methods: {
      showBox() {
        console.log(`On montre la box`);

        this.modal = true;
      },

      downloadDocument() {
        console.log(`On telecharge le document `, this.boxFile);

        const URL = "http://localhost:5000/download/" + this.boxFile;

        axios({
          url: URL,
          method: 'GET',
          responseType: 'blob', // important
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', this.boxFile);
          document.body.appendChild(link);
          link.click();
        });
      }
    }
}
</script>