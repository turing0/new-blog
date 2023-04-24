const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './layouts/**/*.tsx',
    './data/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        "anchor-blue": "#6469FF",
        primary: colors.fuchsia,
        'spotify-green': '#1DB954',
        fuchsia: colors.fuchsia,
        green: colors.emerald,
        blue: colors.blue,
        yellow: colors.amber,
        purple: colors.violet,
        dark: '#222222',
        'header-active-from': '#dafefd',
        'header-active-via': '#fdfdb3',
        'header-active-to': '#fcdaab',
        'header-hover-from': '#fecaca',
        'header-hover-via': '#fed7aa',
        'header-hover-to': '#f0abfc',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
          950: '#131415'
        }
      },
      grayscale: {
        50: '50%'
      },
      fontFamily: {
        sans: ['Karla', ...fontFamily.sans]
      },
      keyframes: ({ theme }) => ({
        mutation: {
          '0%': {
            background: theme('colors.rose.200 / 3%')
          },
          '10%': {
            background: theme('colors.rose.200 / 15%'),
            color: theme('colors.rose.200 / 75%')
          },
          '100%': {
            background: theme('colors.rose.200 / 0%')
          }
        },
        emoji: {
          '0%': {
            opacity: '0',
            transform: 'translateY(0) scale(0)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-40px) scale(1)'
          },
          to: {
            opacity: '0',
            transform: 'translateY(-60px) scale(1.4)'
          }
        },
        loading: {
          '0%': {
            opacity: '.2'
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)'
          },
          to: {
            opacity: '.2'
          }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      }),
      boxShadow: ({ theme }) => ({
        // inspired by https://www.joshwcomeau.com/shadow-palette/
        'surface-glass': `
          inset 0.25px 1px 0 0 ${theme('colors.rose.200 / 3%')},
          0px 0.3px 0.3px rgba(3, 2, 2, 0.02),
          0px 2.2px 2.5px -0.4px rgba(3, 2, 2, 0.02),
          0px 4.3px 4.8px -0.8px rgba(3, 2, 2, 0.02),
          0px 7.5px 8.4px -1.2px rgba(3, 2, 2, 0.02),
          0px 12.8px 14.4px -1.7px rgba(3, 2, 2, 0.02),
          0px 21px 23.6px -2.1px rgba(3, 2, 2, 0.02),
          0px 33.2px 37.4px -2.5px rgba(3, 2, 2, 0.02)`,
        'surface-elevation-low': `
          inset 0.25px 1px 1px 0 ${theme('colors.rose.200 / 1.5%')}, 
          0.3px 0.5px 0.7px rgba(3, 2, 2, 0.2),
          0.4px 0.8px 1px -1.2px rgba(3, 2, 2, 0.2),
          1px 2px 2.5px -2.5px rgba(3, 2, 2, 0.2);`,
        'surface-elevation-medium': `
          inset 0.25px 1px 1px 0 ${theme('colors.rose.200 / 3%')},
          0.3px 0.5px 0.7px rgba(3, 2, 2, 0.1),
          0.8px 1.6px 2px -0.8px rgba(3, 2, 2, 0.1),
          2.1px 4.1px 5.2px -1.7px rgba(3, 2, 2, 0.1),
          5px 10px 12.6px -2.5px rgba(3, 2, 2, 0.1)`
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: '#0000CC',
              '&:hover': {
                color: theme('colors.indigo.500')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: {
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem'
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.fuchsia.400'),
              '&:hover': {
                color: theme('colors.rose.50')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            code: {
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem'
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100')
              },
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ]
};
