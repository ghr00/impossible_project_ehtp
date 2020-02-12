<template>
<div class="row">
<nav id="main-navbar" class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top hidden-xs">
  <a class="navbar-brand" href="/">EHTP Docs</a>
  <!-- Links -->
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <menu-item text="Documents" href="/docs"></menu-item>
    <menu-item text="Résumés" href="/summaries"></menu-item>
    <menu-item text="Questions" href="/questions"></menu-item>
    <menu-item text="Encyclopédie" href="#"></menu-item>
    <menu-item text="Ecole" href="#"></menu-item>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Connexion
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Pseudo ou email">
          <input class="form-control mr-sm-2" type="search" placeholder="Mot de passe">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Connexion</button>
        </form>
      </div>
    </li>

    <menu-item text="Inscription" href="#"></menu-item>
    <menu-item text="A propos" href="/about"></menu-item>
  </ul> 

  <search-bar size='medium' text='Rechercher'></search-bar>
</nav>
</div>
</template>

<script>

import MenuItem from './MenuItem.vue'
import SearchBar from './SearchBar.vue'

export default {

    name: "MainMenu",
    components: {
        SearchBar,
        MenuItem
    }
}
</script>