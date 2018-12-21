module.exports = {
    Options : function (url, method, data){
        this.url = url;
        this.method = method || 'get';
        this.data = data || {};
    }
}
