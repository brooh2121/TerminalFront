var blobApi = Vue.resource("https://jsonplaceholder.typicode.com/posts{/id}");


var app = new Vue({
    el: '#app',
    data: {
        //message:'Hello Dismas'
        textarea: '',
        blobid: '',
        system: '',
        endpoint:'https://jsonplaceholder.typicode.com/posts'
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
        },

        TestButton: function() {
          alert(this.endpoint + "={" + this.blobid + "}?=system={" + this.system +"}");
          //blobApi
        }

    }
});
