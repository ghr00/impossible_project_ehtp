<template>
  <div id="app">
    <MainMenu></MainMenu>
    <div class="container-fuild border">
          <!-- <div class="container py-2"> -->
          
          <!-- Ces deux rows doivent prendre toute la page d'acceuil à son affichage.. -->
        
          <div class="row">
                      
               <div class="col">
                 <center>
                      <h1 class="font-weight-light">EHTP Docs</h1>
                      <p>
                           La plateforme libre d'échange de documents pour les étudiants de l'EHTP
                      </p>
                   </center>
            </div>   
          </div>
        
          <div class="row">
            <div class="col-5">
            </div>
            <div class="col-6">
              <search-bar size='large' text='Rechercher'></search-bar>
            </div>
          </div>
    </div>

    <div class="container-fuild border">
        <!-- Les categories les plus actives-->
        <div class="row">
            <div class="col">
              <h2 class="font-weight-light">Les categories les plus actives</h2>
            </div>
        </div>
        
        <div class="row">
            <template v-for="category in categories">
                <category-component v-bind:key="category.id" v-bind:category-name="category.name"></category-component>
            </template>
        </div>
        
        <br>
        <br>
        
          <!-- Les derniers documents -->
        <div class="row">
            <div class="col">
              <h2 class="font-weight-light">Derniers documents importés</h2>
            </div>
        </div>
        
        <div class="row">
              <div class="col" v-for="(doc, index) in docs" v-bind:key="index">
                <document-component v-bind:doc-type="doc.image" v-bind:doc-name="doc.name"></document-component>
              </div>
        </div>
        
          <!-- Les derniers résumés-->
        <div class="row">
            <div class="col">
              <h2 class="font-weight-light">Derniers résumés redigés</h2>
            </div>
        </div>
        
        <div class="row">
            <div class="col" v-for="(sum, index) in summaries" v-bind:key="index">
              <summary-component v-bind:sum-image="sum.image" v-bind:sum-name="sum.name" v-bind:sum-author="sum.author"></summary-component>
          </div>
        </div>
          <!-- Les derniéres questions posées-->
        <div class="row">
            <div class="col">
              <h2 class="font-weight-light">Derniéres questions posées</h2>
            </div>
        </div>
        
        <div class="row">
              <div class="col" v-for="(qst, index) in questions" v-bind:key="index">
                <question-component v-bind:qst-content="qst.content" v-bind:qst-responses="qst.responses" v-bind:qst-seen="qst.seen" v-bind:qst-author="qst.author"></question-component>
              </div>
        </div>
      </div>
  </div>
</template>

<script>
import CategoryComponent from './components/Category.vue'
import DocumentComponent from './components/Document.vue'
import SummaryComponent from './components/Summary.vue'
import QuestionComponent from './components/Question.vue'
import SearchBar from './components/Menu/SearchBar.vue'
import MainMenu from './components/Menu/MainMenu.vue'

export default {
  name: 'App',
  components: {
    CategoryComponent,
    SummaryComponent,
    DocumentComponent,
    QuestionComponent,
    SearchBar,
    MainMenu
  }, 
  data() {
return {
categories: [{id : 1,name: "Examens",color: "green"}, {id:2,name: "Rapports de stage",color: "green"}, {id:3,name: "Présentations",color: "green"}, {id:4,name: "GC",color: "green"}, {id:5,name: "Annonces", color: "green"}, {id:6, name: "Informatique", color: "blue"}, {id:7, name: "C++", color: "blue"}],

docs: [
{ id:0, image: "PNG", name: "Document de test", author: "GHR00" },
{ id:1, image: "PDF", name: "Examen analyse 2019 SIG/GI", author: "Random Alaoui" },
{ id:2, image: "PDF", name: "Cours de resistance de materiaux", author: "Hamid Lambda" }
],
  
summaries: [
{ image: "IMAGE", name: "Résumé du marché public", author: "Randoma Allouch"},
                  
],
  
questions: [
{ content: "Comment créer une classe avec l'IDE Code::Blocks?", responses: 3, seen: 11, categories: [6, 7], author: "Azerty123"},
]
}
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
