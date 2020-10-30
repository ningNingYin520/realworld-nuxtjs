import { request } from '@/plugins/request'
// 获取文章列表
export const getArticles = params => {
   return request({
     method: 'GET',
     url: '/api/articles',
     params
  })
}

// 获取关注的文章列表
export const getFeedArticles = params => {
     return request({
       method: 'GET',
       url: '/api/articles/feed',
      params
      //  headers: {
      //   // Authorization: Token jwt.token.here
      //   // 添加用户身份，格式： Token空格Token数据
      //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE5Mzk1LCJ1c2VybmFtZSI6InlubjAwMSIsImV4cCI6MTYwODc5MTk4OX0.kxzLZKuVmfL2aoAUAAPudfb9m17yrUUrPFOyVZrxSck`
      //  },
    })
}

// 文章添加点赞
export const addFavorite = slug => {
     return request({
       method: 'POST',
       url: `/api/articles/${slug}/favorite`
    })
}

// 文章取消点赞
export const deleteFavorite = slug => {
     return request({
       method: 'DELETE',
       url: `/api/articles/${slug}/favorite`
    })
}

// 获取文章详情
export const getArticle = slug => {
     return request({
       method: 'GET',
       url: `api/articles/${slug}`
    })
}

// 获取文章评论
export const getComments = slug => {
     return request({
       method: 'GET',
       url: `/api/articles/${slug}/comments`
    })
}