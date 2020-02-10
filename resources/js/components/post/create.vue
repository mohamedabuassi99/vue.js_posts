<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="onSubmid">
                    <alert-success :form="form">created successfully</alert-success>
                    <div class="form-group">
                        <label for="title">Email address</label>
                        <input type="text" v-model="form.title" name="title" class="form-control" id="title"
                               aria-describedby="title"
                               placeholder="Enter your title">
                        <has-error :form="form" field="title" ></has-error>

                    </div>
                    <div class="form-group">
                        <label for="bodyy">Password</label>
                        <textarea class="form-control" v-model="form.body" name="body" id="bodyy"
                                  placeholder="what are u thinking"></textarea>
                        <has-error :form="form" field="body" ></has-error>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import AlertSuccess from "vform/src/components/AlertSuccess";
    export default {
        name: "create",
        comments: {AlertSuccess},
        data() {
            return {
                form: new Form({
                    title: '',
                    body: ''

                })
            }
        },
        methods: {
            //on submit
            onSubmid() {
                this.form.post('/api/post').then(() => {

                }).catch(() => {

                })
            }
        }
    }
</script>

<style scoped>

</style>
