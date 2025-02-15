/**
 * 全局路由中间件（后缀为.global），
 * 每次路由变化时自动运行，按字符串排序
 * 运行顺序：全局路由中间件 -> 具名路由中间件
 */

import { useAppStore } from '@/store/useAppStore';

const NotLoginRoutes = ['/login', '/login/register'];

export default defineNuxtRouteMiddleware(async (to, from) => {
  // console.log('====Middleware global auth====', to, from);

  const store = useAppStore();

  if (import.meta.client) {
    // client逻辑
    console.log('global Middlewar client: ' + store.token);
  } else {
    // ssr逻辑
    console.log('global Middlewar SSR: ' + store.token);
  }
});
