import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light',
  },
  {
    name: 'dracula',
    text: '🧛 Dark',
  },
  {
    name: 'valentine',
    text: '🌸 Valentine',
  },
  {
    name: 'aqua',
    text: '💦 Aqua',
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave',
  },
  {
    name: 'night',
    text: '🌃 Night',
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi',
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade',
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake',
  },
  {
    name: 'garden',
    text: '🏡 Garden',
  },
  {
    name: 'retro',
    text: '🌇 Retro',
  },
  {
    name: 'black',
    text: '🖤 Black',
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      link: 'https://www.linkedin.com/in/ayresigo/',
      text: 'linkedin',
    },
    {
      link: 'https://github.com/ayresigo',
      text: 'github',
    },
  ],
}

export const footer: FooterConfig = {
  nav: [
    {
      link: 'https://www.linkedin.com/in/ayresigo/',
      text: 'linkedin',
    },
    {
      link: 'https://github.com/ayresigo',
      text: 'github',
    },
  ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: '2-digit',
  },
}

export const feed: FeedConfig = {}
