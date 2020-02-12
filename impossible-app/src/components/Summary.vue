<template>
    <!-- <table class="table table-bordered table-dark">
        <tbody>
            <tr class="d-flex">
                <td class="col-4">{{ sumImage }}</td>
            </tr>
            <tr class="d-flex">
                <td class="col-4">{{ sumName }}</td>
            </tr>
            <tr class="d-flex">
                <td class="col-4">{{ sumAuthor }}</td>
            </tr>
        </tbody>
    </table> -->

    <!-- Card -->
<div class="card card-cascade wider">

  <!-- Card image -->
  <div class="view view-cascade gradient-card-header blue-gradient">

    <!-- Title -->
    <h2 class="card-header-title mb-3">{{ sumName }}</h2>
    <!-- Text -->
    <p class="mb-0"><i class="fas fa-calendar mr-2"></i>26.07.2017</p>

  </div>

  <!-- Card content -->
  <div class="card-body card-body-cascade text-center">

    <!-- Text -->
    <p class="card-text">{{ sumDesc }}</p>
    <!-- Link -->
    <a href="#!" class="orange-text d-flex flex-row-reverse p-2">
      <h5 class="waves-effect waves-light">Read more<i class="fas fa-angle-double-right ml-2"></i></h5>
    </a>

  </div>
  <!-- Card content -->

</div>
<!-- Card -->
</template>

<script>
export default {
    name: "SummaryComponent",

    props: {
        sumImage: {
            type: String,
            required: false,
            default: 'No IMAGE'
        },

        sumName: {
            type: String,
            required: false,
            default: 'Sans nom'
        },

        sumDesc: {
            type: String,
            required: false,
            default: 'Sans nom'
        },

        sumAuthor: {
            type: String,
            required: false,
            default: 'Sans auteur'
        }
    }
}
</script>