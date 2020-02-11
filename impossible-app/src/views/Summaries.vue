<template>
    <div class="summaries">
        <div class="container border">
            <div class="row">
                <div class="col">
                    <center>
                        <h1>Centre des cours rédigés et résumés</h1>
                    </center>
                </div>
            </div>

            <div class="row">
                <div class="col-10">
                    <div class="alert alert-success" role="alert"> Vous avez recherché tous les documents existants.</div>
                </div>
                <div class="col-2">
                    <button class="btn btn-outline-success my-2 my-sm-0 float-left" type="button">Rediger</button>
                </div>
            </div>

            <div class="row">
                <button class="btn btn-outline-success my-2 my-sm-0" type="button">Importer</button>
            </div>
        </div>
            
        <div class="container border">
            <!-- Affiche tous les documents qui existent -->
            <div class="row">
                <div class="col" v-for="(sum, index) in summaries" v-bind:key="index">
                <large-summary-component v-bind:large-sum-image="sum.image" v-bind:large-sum-name="sum.name" v-bind:large-sum-desc="sum.name" v-bind:large-sum-author="sum.author"></large-summary-component>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
// @ is an alias to /src
import CategoryComponent from '@/components/Category.vue'
import LargeSummaryComponent from '@/components/Summaries/LargeSummary.vue'

export default {
  name: 'Summaries',
  components: {
    CategoryComponent,
    LargeSummaryComponent
  },

  data() {
        return {
            categories: [{id : 1,name: "Examens",color: "green"}, {id:2,name: "Rapports de stage",color: "green"}, {id:3,name: "Présentations",color: "green"}, {id:4,name: "GC",color: "green"}, {id:5,name: "Annonces", color: "green"}, {id:6, name: "Informatique", color: "blue"}, {id:7, name: "C++", color: "blue"}],

            summaries: [
                { image: "IMAGE", name: "Résumé du marché public", desc:"DESCRIPTION", author: "Randoma Allouch"},                    
            ],
        }
    }
}

</script>