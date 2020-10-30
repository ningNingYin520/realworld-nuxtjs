import { request } from '@/plugins/request'
// 获取文章标签信息
export const getTags = () => {
   return request({
     method: 'GET',
     url: '/api/tags'
  })
}