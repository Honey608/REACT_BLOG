
let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    //  检查用户名密码是否正确
    checkLogin: ipUrl + 'checkLogin',
    // 获取文章类别信息
    getTypeInfo: ipUrl + 'getTypeInfo',
    //  添加文章
    addArticle: ipUrl + 'addArticle',
    //  修改文章第api地址
    updateArticle:ipUrl + 'updateArticle', 
    //  文章列表
    getArticleList:ipUrl + 'getArticleList',
    //  删除文章
    delArticle:ipUrl + 'delArticle/',
    //  根据ID获得文章详情
    getArticleById:ipUrl + 'getArticleById/'
}

export default servicePath