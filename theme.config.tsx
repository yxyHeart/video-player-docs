import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/yxyheart/video-player-docs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/yxyheart/video-player-docs',
  footer: {
    text: 'Nextra Docs Template',
  },
  sidebar:{
    "defaultMenuCollapseLevel":10
  }

}

export default config
