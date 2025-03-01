import request from '@/utils/request.js';

export function listArticles(params) {
  return request({
    url: '/api/v2/wx/recommendData',
    method: 'get',
    params,
  });
}

export function getArticles(id) {
  return request({
    url: '/api/v2/test/detail',
    method: 'get',
    params: { test_id: id },
  });
}

export function updArticles(data) {
  return request({
    url: data.id ? `/api/articles/${data.id}` : '/api/articles',
    method: data.id ? 'put' : 'post',
    data,
  });
}

export function delArticles(id) {
  return request({
    url: '/api/articles/' + id,
    method: 'delete',
  });
}

// 点赞/取消点赞
export function updArticleLikes(data) {
  return request({
    url: '/api/article/likes',
    method: 'post',
    data,
  });
}
