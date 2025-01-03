import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: 'https://avatars.githubusercontent.com/ayresigo',
    bio: 'ayres + igo(r) 📝',
    name: 'Igor Carvalho',
    status: '🔮',
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: "ayresigo's blog",
  themeColor: '#3D4451',
  title: 'ayresigo',
}
