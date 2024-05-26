
import { type Metadata, type Viewport } from 'next'


export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#282935' },
    { media: '(prefers-color-scheme: dark)', color: '#282935' },
  ],
  colorScheme: 'dark',
}


