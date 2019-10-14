var blobApi = Vue.resource("https://jsonplaceholder.typicode.com/posts{/id}");


var app = new Vue({
    el: '#app',
    data: {
        //message:'Hello Dismas'
        textarea: '',
        blobid: ''
    },
    methods: {

        getBlob: function () {
            blobApi.get({id:this.blobid}).then( response =>
                this.textarea = response.data.body
            )
        },
        saveBlob: function () {
            var textarea = this.textarea
            var blob = new Blob([textarea], {type: "text/plain; charset=utf-8"});
            saveAs(blob, this.blobid + " .txt");
        }

    }
});
