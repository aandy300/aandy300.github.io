// modal 元件
const del_obj ={
    props:[ 'temp' ],
    template:  
    `
      <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger"> {{ temp.data.title }} </strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <!-- 確定刪除按鍵 -->
              <button type="button" class="btn btn-danger" @click="$emit( 'closeModal', 'del'), $emit( 'delData')">確認刪除</button>
            </div>
          </div>
        </div>        
      </div>
    `
}

const new_edit_obj ={
    data(){
      return{
        newTemp: '',
        inside_isNew: false
      }
    },
    updated () { 
      this.inside_isNew = this.isNew
    },
    props:[ 'temp', 'isNew' ],
    created() {
      this.newTemp = this.temp
    },
    template:  
    `
        <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span v-if="inside_isNew">新增產品</span>
                <span v-else>編輯產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">主要圖片</label>
                    <input v-model="temp.data.imageUrl" type="text" class="form-control mb-2" placeholder="請輸入圖片連結">
                    <img class="img-fluid" :src="temp.data.imageUrl">
                  </div>
                  <h3 class="mb-3">多圖新增</h3>
                  <div v-if="Array.isArray(temp.data.imagesUrl)">
                    <div class="mb-1" v-for="(image, key) in temp.data.imagesUrl" :key="key">
                      <div class="mb-3">
                        <label for="imageUrl" class="form-label">圖片網址</label>
                        <input v-model="temp.data.imagesUrl[key]" type="text" class="form-control"
                          placeholder="請輸入圖片連結">
                      </div>
                      <img class="img-fluid" :src="image">
                    </div>
                    <div
                      v-if="!temp.data.imagesUrl.length || temp.data.imagesUrl[temp.data.imagesUrl.length - 1]">
                      <button class="btn btn-outline-primary btn-sm d-block w-100"
                        @click="temp.data.imagesUrl.push('')">
                        新增圖片
                      </button>
                    </div>
                    <div v-else>
                      <button class="btn btn-outline-danger btn-sm d-block w-100" @click="temp.data.imagesUrl.pop()">
                        刪除圖片
                      </button>
                    </div>
                  </div>
                  <div v-else>
                  <!-- @createImages -->
                    <button class="btn btn-outline-primary btn-sm d-block w-100" 
                    @click="$emit('createImages')">
                      新增圖片
                    </button>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <input id="title" v-model="temp.data.title" type="text" class="form-control" placeholder="請輸入標題">
                  </div>
  
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">分類</label>
                      <input id="category" v-model="temp.data.category" type="text" class="form-control"
                        placeholder="請輸入分類">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">單位</label>
                      <input id="unit" v-model="temp.data.unit" type="text" class="form-control" placeholder="請輸入單位">
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <input id="origin_price" v-model.number="temp.data.origin_price" type="number" min="0"
                        class="form-control" placeholder="請輸入原價">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <input id="price" v-model.number="temp.data.price" type="number" min="0" class="form-control"
                        placeholder="請輸入售價">
                    </div>
                  </div>
                  <hr>
  
                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" v-model="temp.data.description" type="text" class="form-control"
                      placeholder="請輸入產品描述">
                  </textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="description" v-model="temp.data.content" type="text" class="form-control"
                      placeholder="請輸入說明內容">
                  </textarea>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input id="is_enabled" v-model="temp.data.is_enabled" class="form-check-input" type="checkbox"
                        :true-value="1" :false-value="0">
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button> 
              <!-- 新增or修改按鍵 -->           
              <button v-if="inside_isNew = inside_isNew" type="button" class="btn btn-primary" @click="$emit( 'addProductPost') ">確認新增</button>            
              <button v-else type="button" class="btn btn-primary" @click="$emit( 'editProduct') ">確認修改</button>
            </div>
          </div>
        </div>
        </div>
    `  
  }

export {
    del_obj,
    new_edit_obj,
}