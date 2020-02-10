<template>
    <div class="container">
        <br>

        <div class="card">
            <div class="card-header">
                Posts
            </div>
            <div class="card-body p-0">
                <table class="table table-dark" v-if="posts.length > 0">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                        <th scope="col">action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="post in posts">
                        <th scope="row">{{post.id}}</th>
                        <td>{{post.title}}</td>
                        <td>{{post.body}}</td>
                        <td>
                            <router-link :to="'/post/edit/'+ post.id" class="text-primary">edit</router-link>|
                            <a href="" class="text-danger" @click="onDelete(post.id,post.title)">delete</a>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <p class="text-center p-0" v-else>
                    there is no posts
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                posts: {}
            }
        },
        methods: {
            getPosts() {
                axios.get('api/post').then((res) => {
                    this.posts = res.data.data
                })
            },
            onDelete(id, title) {
            if(confirm('do you want to delet this post'+ title)){
                axios.delete('api/post/'+id).then((res)=>{
                    this.getPosts();
                })
                .catch(err=>{
                    alert(err.response.data.message)
                })
            }
            }

        },
        created() {
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>
