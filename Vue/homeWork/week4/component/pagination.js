// 分頁 元件
const pagination_obj ={
    data(){
      return{
        inside_pages:{}
      }
    },
    updated () { 
      this.inside_pages = this.pages
    },
    props:[ 'pages' ],
    created() {
      
    },
    template:  
    `
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled : !pages.has_pre }" >
        <a class="page-link" href="#" aria-label="Previous" @click=" $emit('get-data', inside_pages.current_page - 1)" >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" 
      v-for=" page in pages.total_pages " :key=" page + 'page' "
      :class=" { active: page === pages.current_page } "      
      >
        <a class="page-link" href="#" @click=" $emit('get-data', page) "> {{ page }} </a>
      </li>      
      <li class="page-item" :class="{ disabled : !pages.has_next }" >
        <a class="page-link" href="#" aria-label="Next" @click=" $emit('get-data', inside_pages.current_page + 1)" >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
    `  
  }

export {
    pagination_obj
}