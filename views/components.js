
	Vue.component('button-counter', {
        data: function () {
          return {
            count: 0
          }
        },
        template: '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
      })
  
      Vue.component('search-bar', {
        props: ['type', 'size', 'text'],
        template: 
                '<form class="form-inline">\
                  <input class="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Rechercher">\
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ text }}</button>\
              </form>'
        
      })
  
      Vue.component('category-component', {
        props: ['categoryId', 'categoryName', 'categoryColor'],
        template: 
        '<button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ categoryName }}</button>'
      })
    
      //import documentComponent from './doc.vue'

         Vue.component('document-component', {
        props: ['docType', 'docName'],
        template: 
        '<table class="table table-bordered table-dark">\
                  <tbody>\
                    <tr class="d-flex">\
                      <td class="col-4">{{ docType }}</td>\
                    </tr>\
                    <tr class="d-flex">\
                      <td class="col-4">{{ docName }}</td>\
                    </tr>\
                  </tbody>\
                </table>\
        '
      }) 
  
      Vue.component('summary-component', {
        props: ['sumImage', 'sumName', 'sumAuthor'],
        template: 
        '<table class="table table-bordered table-dark">\
                  <tbody>\
                    <tr class="d-flex">\
                      <td class="col-4">{{ sumImage }}</td>\
                    </tr>\
                    <tr class="d-flex">\
                      <td class="col-4">{{ sumName }}</td>\
                    </tr>\
                    <tr class="d-flex">\
                      <td class="col-4">{{ sumAuthor }}</td>\
                    </tr>\
                  </tbody>\
                </table>\
        '
      })
  
      Vue.component('question-component', {
        props: ['qstContent', 'qstResponses', 'qstSeen', 'qstAuthor'],
        template: 
        '<table class="table table-bordered table-dark">\
                  <tbody>\
                    <tr>\
                      <td>{{ qstContent }}</td>\
                    </tr>\
                    <tr>\
                      <td>{{ qstResponses }}</td>\
                    </tr>\
                    <tr>\
                      <td>{{ qstSeen }}</td>\
                    </tr>\
                    <tr>\
                      <td>{{ qstAuthor }}</td>\
                    </tr>\
                  </tbody>\
                </table>\
        '
      })
  
      