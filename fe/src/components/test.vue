<template>
  <div>
    <b-card-group deck class="m-3">
      <b-card header="GET">
        <b-form-textarea v-model="txtGet" class="mb-3"
                         placeholder="Result Location"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendGet"
                  variant="success"> Transmit</b-button>
      </b-card>
      <b-card header="POST">
        <b-form-textarea v-model="txtPost" class="mb-3"
                         placeholder="Result Location"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-form-input v-model="txtPostName" class="mb-3"
                      type="text"
                      placeholder="CompanyName"></b-form-input>
        <b-form-input v-model="txtPostRemark" class="mb-3"
                      type="text"
                      placeholder="CompanyRemarks"></b-form-input>
        <b-button @click="sendPost"
                  variant="primary"> Transmit</b-button>
      </b-card>
      <b-card header="PUT">
        <b-form-textarea v-model="txtPut" class="mb-3"
                         placeholder="Result Location"
                         :rows="3"
                         :max-rows="6">

        </b-form-textarea>
        <b-button @click="sendPut"
                  variant="warning">Transmit</b-button>
      </b-card>
      <b-card header="DELETE">
        <b-form-textarea v-model="txtDelete" class="mb-3"
                         placeholder="Result Location"
                         :rows="3"
                         :max-rows="6">

        </b-form-textarea>
        <b-button @click="sendDelete"
                  variant="danger">Transmit</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        txtGet: '',
        txtPost: '',
        txtPut: '',
        txtDelete: '',
        txtPostName: '',
        txtPostRemark: '',
      };
    },
    methods: {
      sendGet() {
        this.$axios.get('http://localhost:3000/api/data/company')
          .then((res) => {
            this.txtGet = JSON.stringify(res.data);
          })
          .catch((err) => {
            this.txtGet = JSON.stringify(err);
          });
      },
      sendPost() {
        const body = {
          name: this.txtPostName,
          rmk: this.txtPostRemark,
        };
        this.$axios.post('http://localhost:3000/api/data/company', body)
          .then((res) => {
            this.txtPost = JSON.stringify(res.data);
          })
          .catch((err) => {
            this.txtPost = JSON.stringify(err);
          });
      },
      sendPut() {
        this.$axios.put('http://localhost:3000/api/data/company')
          .then((res) => {
            this.txtPut = JSON.stringify(res.data);
          })
          .catch((err) => {
            this.txtPut = JSON.stringify(err);
          });
      },
      sendDelete() {
        this.$axios.delete('http://localhost:3000/api/data/company')
          .then((res) => {
            this.txtDelete = JSON.stringify(res.data);
          })
          .catch((err) => {
            this.txtDelete = JSON.stringify(err);
          });
      },
    },
  };
</script>

<style scoped>

</style>
