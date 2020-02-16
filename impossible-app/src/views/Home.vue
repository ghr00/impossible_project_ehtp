<template>
  <div class="home">
    <!-- Ces deux rows doivent prendre toute la page dacceuil à son affichage..  -->
      <!-- <div class="container border maxContainer">
        
        </div> -->

    <div class="container my-5 py-5 z-depth-1 blue-gradient">

        <h3 class="font-weight-bold pt-5 pb-2">EHTP Docs</h3>
        <img src="../assets/logo.png">
      <!--Section: Content-->
      <section class="white-text text-center">
        
        <h5 classe="font-weight-bold pt-5 pb-2">La plateforme libre d'échange de documents pour les étudiants de l'EHTP</h5>
              
        <div class="row d-flex justify-content-center">
            <search-bar size='large' text='Rechercher'></search-bar>
        </div>

      </section>
    </div>

    <!-- <div class="container my-5 py-5 z-depth-1"> -->
      <section class="dark-grey-text text-center">
         <!-- Les categories les plus actives-->
        
        <div class="row d-flex justify-content-center">
            <template v-for="category in categories">
                <category-component v-bind:key="category.id" v-bind:category-name="category.name"></category-component>
            </template>
        </div>
      </section>
      <!--Section: Content-->
    <!-- </div> -->

    <div class="container my-5 py-5 z-depth-1 blue-gradient">
      <section class="white-text text-center">     
          <!-- Les derniers documents -->
        <div class="row d-flex justify-content-center">
            <div class="col">
              <h2 class="font-weight-light">Derniers documents importés</h2>
            </div>
        </div>
      </section>
    </div>
    <div class="container my-5 py-5 z-depth-1">
        <div class="row">
              <div class="col" v-for="(doc, index) in docs" v-bind:key="index">
                <document-component v-bind:doc-type="doc.image" v-bind:doc-name="doc.name"></document-component>
              </div>
        </div>
   </div>

   <div class="container my-5 py-5 z-depth-1 blue-gradient">
          <!-- Les derniers résumés-->
        <section class="white-text text-center">    
          <div class="row">
              <div class="col">
                <h2 class="font-weight-light">Derniers résumés redigés</h2>
              </div>
          </div>
        </section>
   </div>

    <div class="container my-5 py-5 z-depth-1">
        <div class="row">
            <div class="col" v-for="(sum, index) in summaries" v-bind:key="index">
              <summary-component v-bind:sum-image="sum.image" v-bind:sum-name="sum.name" v-bind:sum-desc="sum.desc" v-bind:sum-author="sum.author"></summary-component>
            </div>
        </div>
    </div>

    <div class="container my-5 py-5 z-depth-1">
         <!-- Les derniéres questions posées-->
        <div class="row">
            <div class="col">
              <h2 class="font-weight-light">Derniéres questions posées</h2>
            </div>
        </div>
    </div>
    <div class="container my-5 py-5 z-depth-1"> 
        <div class="row">
              <div class="col" v-for="(qst, index) in questions" v-bind:key="index">
                <question-component v-bind:qst-content="qst.content" v-bind:qst-responses="qst.responses" v-bind:qst-seen="qst.seen" v-bind:qst-author="qst.author"></question-component>
              </div>
        </div>

      </div>
    </div> 
    <!-- <button @click="moveNext">next</button> -->

    

    
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import CategoryComponent from '@/components/Category.vue'
import DocumentComponent from '@/components/Document.vue'
import SummaryComponent from '@/components/Summary.vue'
import QuestionComponent from '@/components/Question.vue'
import SearchBar from '@/components/Menu/SearchBar.vue'
import MainMenu from '@/components/Menu/MainMenu.vue'
import Footer from '@/components/Menu/Footer.vue'

import { EventBus } from '../services/event-bus.js';

var Documents = [ { id:0, image: "PNG", name: "Document de test", author: "GHR00" }, ]; 

EventBus.$on('receiveDocumentsFromServer', documents => {
  console.log(`La liste des documents reçu est : ${JSON.stringify(documents)}`);
  var tmp = Documents.concat(documents);

  Documents = tmp;

  console.log(`La nouvelle liste des documents est : ${JSON.stringify(Documents)}`);
}); 

export default {
  name: 'Home',
  components: {
    CategoryComponent,
    SummaryComponent,
    DocumentComponent,
    QuestionComponent,
    SearchBar,
    MainMenu,
    Footer,
  }, 
  data() {
return {
  categories: [{id : 1,name: "Examens",color: "green"}, {id:2,name: "Rapports de stage",color: "green"}, {id:3,name: "Présentations",color: "green"}, {id:4,name: "GC",color: "green"}, {id:5,name: "Annonces", color: "green"}, {id:6, name: "Informatique", color: "blue"}, {id:7, name: "C++", color: "blue"}],

  /* docs: [
    { id:0, image: "PNG", name: "Document de test", author: "GHR00" },
    { id:1, image: "PDF", name: "Examen analyse 2019 SIG/GI", author: "Random Alaoui" },
    { id:2, image: "PDF", name: "Cours de resistance de materiaux", author: "Hamid Lambda" }
  ], */
  
  docs: Documents,

  summaries: [
    { image: "IMAGE", name: "Résumé du marché public", desc:"Ce cours comporte les deux premieres parties du cours de Madame ?? que j'ai resumé de maniére explicative !", author: "Randoma Allouch"},
    { image: "IMAGE", name: "Résumé du marché public", desc:"Ce cours comporte les deux premieres parties du cours de Madame ?? que j'ai resumé de maniére explicative !", author: "Randoma Allouch"},
                      
  ],
    
  questions: [
    { content: "Comment créer une classe avec l'IDE Code::Blocks?", responses: 3, seen: 11, categories: [6, 7], author: "Azerty123"},
    ]
    }
  },
  method:{
  }
    
}

    
</script>
