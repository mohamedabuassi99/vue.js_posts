<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <alert-success :form="form" v-if="form.title.length < 250 && form.title.length  > 1 ">updated successfully!</alert-success>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" v-model="form.title" class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="Enter title">
                <has-error :form="form" field="title"></has-error>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <textarea class="form-control" v-model="form.body" name="body" id="exampleInputPassword1"
                          placeholder="enter Body"></textarea>
                <has-error :form="form" field="body"></has-error>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: "edit",
        data() {
            return {
                form: new Form({
                    title: '',
                    body: ''
                }),
                id: 0,
            }
        },
        methods: {

            onSubmit() {
                this.form.put('/api/post/' + this.id)
                
            },

            loadPost() {
                axios.get('/api/post/' + this.id).then((res) => {
                    this.form.fill(res.data.data);
                });
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.loadPost();
        }
    }
</script>

<style scoped>
</style>
