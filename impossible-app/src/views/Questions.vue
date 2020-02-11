<template>
    <div class="summaries">
        <div class="container border">
            <div class="row">
                <div class="col">
                    <center>
                        <h1>Centre des questions et réponses</h1>
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
                <div class="col" v-for="(qst, index) in questions" v-bind:key="index">
                    <large-question-component v-bind:qst-content="qst.content" v-bind:qst-responses="qst.responses" v-bind:qst-seen="qst.seen" v-bind:qst-author="qst.author"></large-question-component>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
// @ is an alias to /src
import CategoryComponent from '@/components/Category.vue'
import LargeQuestionComponent from '@/components/Questions/LargeQuestion.vue'

export default {
  name: 'Questions',
  components: {
    CategoryComponent,
    LargeQuestionComponent
  },

  data() {
        return {
            categories: [{id : 1,name: "Examens",color: "green"}, {id:2,name: "Rapports de stage",color: "green"}, {id:3,name: "Présentations",color: "green"}, {id:4,name: "GC",color: "green"}, {id:5,name: "Annonces", color: "green"}, {id:6, name: "Informatique", color: "blue"}, {id:7, name: "C++", color: "blue"}],

            questions: [
                { content: "Comment créer une classe avec l'IDE Code::Blocks?", responses: 3, seen: 11, categories: [6, 7], author: "Azerty123"},
            ]
        }
    }
}

</script>