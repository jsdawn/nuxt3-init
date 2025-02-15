/**
 * 具名路由中间件，在引用了该中间件的指定页面运行
 * definePageMeta({ middleware: 'posts-auth' })
 */
import { useAppStore } from '@/store/useAppStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // console.log('====Middleware posts-auth====', to, from);
  // return navigateTo('/login');

  const store = useAppStore();

  if (import.meta.client) {
    // client逻辑
    console.log('Middlewar client2: ' + store.token);
  } else {
    // ssr逻辑
    console.log('Middlewar SSR2: ' + store.token);
  }
});
