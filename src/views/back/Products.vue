<template>
  <div>
    <!-- loading 元件 -->
    <div class="content mt-5">
      <div class="create-btn-Pos">
        <button class="btn btn-primary mt-4" @click.prevent="openModal(true)">建立新的產品</button>
      </div>
      <div class="table-responsive">
        <table class="table mt-4">
          <thead>
            <!-- width 分配 -->
            <th>分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="80">編輯</th>
            <th width="80">刪除</th>
          </thead>
          <tbody>
            <!-- eslint ：若v-for的元素為使用到，未出現警告 -->
            <tr v-for="(item) in products" :key="item.id">
              <td >{{ item.category }}</td>
              <td><img class="small rounded" :src="item.imageUrl" alt=""><div>{{ item.title }}</div></td>
              <td class="text-right">{{ item['origin_price'] | currency }}</td>
              <td class="text-right">{{ item.price | currency }}</td>
              <td>
                <!-- 判斷is_enabled是否存在，本題未啟用，所以data沒有回傳 -->
                <span v-if="item['is_enabled']" class="text-success">尚有存貨</span>
                <span v-else>缺貨</span>
              </td>
              <td><button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(false, item)">編輯</button></td>
              <td><button class="btn btn-danger btn-sm"  @click.prevent="openDelModal(item)">刪除</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination class="d-flex justify-content-center" :pageData="pagination" @changepage="getProducts"></Pagination>
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>{{ modalHead }}產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="TempProduct.imageUrl">
                </div>
                <div class="form-group" >
                  <label for="customFile">或 上傳圖片
                    <!-- loading icon -->
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <!-- 每次選擇檔案，觸發uploadFile -->
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    class="img-fluid" alt="" :src="TempProduct.imageUrl">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title" v-model="TempProduct.title">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model="TempProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit"
                      placeholder="請輸入單位" v-model="TempProduct.unit">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價" v-model="TempProduct['origin_price']">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model="TempProduct.price">
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                    placeholder="請輸入產品描述" v-model="TempProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                    placeholder="請輸入產品說明內容" v-model="TempProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <!-- :true/false-value -->
                    <input class="form-check-input" type="checkbox"
                      id="is_enabled" v-model="TempProduct['is_enabled']"
                      :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- del modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ TempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.prevent="deleteProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/view/Pagination';
import { mapGetters } from 'vuex';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      // Edit product
      TempProduct: {},
      // 判斷是否是新物件
      isNew: false,
      // modal 標題更改
      modalHead: '新增',
      // 上傳圖片loading
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    // 從外部server取得data
    getProducts(page = 1) {
      this.$store.dispatch('productsModules/getProducts', page);
    },
    // 透過method取得資料後,才開啟modal。
    openModal(isNew, item) {
      this.$store.dispatch('productsModules/openModal', { isNew, item });
      if(isNew) { // 新增
        this.TempProduct = {};
        this.isNew = true;
        this.modalHead = '新增';
      } else { // 編輯
        // ES6 寫法，將item元素寫入一個空的obj，避免tempProduct和item有參考。
        this.TempProduct = Object.assign({}, item);
        this.isNew = false;
        this.modalHead = '編輯';
        console.log(this.TempProduct);
      };
      $('#productModal').modal('show');
    },
    // 新增 或 編輯 商品
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let vm = this;
      let httpMethod = 'post';
      if(!vm.isNew) { // 如果是編輯，api,方法 變更
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.TempProduct.id}`;
        httpMethod = 'put';
      }
      console.log(api);
      // {data: vm.tempProduct}統一data樣式
      this.$http[httpMethod](api, {data: vm.TempProduct}).then((response) => {
        console.log(response.data);
        if(response.data.success) { // 新增成功
          vm.getProducts();
          $('#productModal').modal('hide');
        } else { // 新增失敗
          $('#productModal').modal('hide');
          alert('新增商品失敗');
        };
      });
    },
    // 刪除商品
    deleteProduct() {
      let vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.TempProduct.id}`;
      console.log(api);
      this.$http.delete(api, {data: vm.TempProduct.id}).then((response) => {
        console.log(response.data);
        if(response.data.success) {
          $('#deleteModal').modal('hide');
          vm.getProducts();
        } else {
          $('#deleteModal').modal('hide');
          alert('刪除商品失敗');
        };
      });
    },
    openDelModal(item) {
      this.TempProduct = Object.assign({}, item);
      $('#deleteModal').modal('show');
      console.log(this.TempProduct);
    },
    // 上傳圖片
    uploadFile() {
      console.log(this);
      const uploadedFile = this.$refs.files.files[0]
      const vm = this;
      // FormData 表單資料傳輸的物件
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      this.$http.post(url, formData, {
        // 上傳格式為 multipart/form-data
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }).then((response) => {
        console.log(response.data);
        // 啟動loading
        this.status.fileUploading = true;
        if(response.data.success) {
          // this.$set 雙向綁定，讓vm.tempProduct.imageUrl有getter和setter。
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
        } else {
          // 錯誤時，觸發Alert
          this.$bus.$emit('message:push', response.data.message, 'danger');
        }
        // 停止loading
        setTimeout(function() { vm.status.fileUploading = false }, 3000);
      })
    }
  },
  computed: {
    ...mapGetters('productsModules', ['products', 'pagination'])
  },
  created() {
    this.getProducts();
    // 註冊事件on==> 接收pagination變動
    this.$bus.$on('page:current',(currentPage) => {
      this.getProducts(currentPage);
    });
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/mixin";
.content {
  min-height: calc(100vh -(51px + 62px));
  @include iphone8plus() {
    padding-top: 75px;
  }
}
.create-btn-Pos {
  text-align: right;
  @include iphone8plus() {
    text-align: left;
    margin-left: 10px;
  }
}
.small {
  width: 50px;
}
.table {
  min-width: 800px;
}
</style>
