import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#F9FAFB',
        'black': '#1F2937',
        'cyan' : '#22D3EE',
        'magenta' : '#EC4899',
        'blue' : '#3B82F6',
        'yellow' : '#FBBF24',
        'red' : '#EF4444',
        'green' : '#10B981',
        'gray' : '#6B7280',
        'indigo' : '#6366F1',
        'pink' : '#EC4899',
        'purple' : '#8B5CF6',
        'rose' : '#F43F5E',
        'orange' : '#F97316',
        'lime' : '#84CC16',
        'sky' : '#0EA5E9',
        'emerald' : '#10B981',
        'teal' : '#14B8A6',
        
      },
    },
  },
  plugins: [],
}
export default config