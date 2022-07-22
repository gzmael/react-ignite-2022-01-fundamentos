export type SpanMarkdown = {
  type: 'span';
  value: string;
}

export type LinkMarkdown = {
  type: 'link';
  url: string;
  children: SpanMarkdown[]
}

export type ParagraphMarkdown = {
  type: 'paragraph';
  children: Array<LinkMarkdown | SpanMarkdown>
}

export interface Post {
  id: number,
  author: {
    name: string;
    avatarUrl: string;
    rule: string;
  }
  content: Array<ParagraphMarkdown | LinkMarkdown>,
  publishedAt: Date
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Diego',
      avatarUrl: 'https://github.com/diego3g.png',
      rule: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Fala galeraa 👋'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: 'jane.design/doctorcare',
              }
            ]
          },
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#novoprojeto',
              }
            ]
          },
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#nlw',
              }
            ]
          },
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#rocketseat',
              }
            ]
          },
        ]
      }
    ],
    publishedAt: new Date('2022-07-19 08:05')
  },
  {
    id: 2,
    author: {
      name: 'Jezmael',
      avatarUrl: 'https://github.com/gzmael.png',
      rule: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Fala galeraa 👋'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: 'jane.design/doctorcare',
              }
            ]
          },
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#novoprojeto',
              }
            ]
          },
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#nlw',
              }
            ]
          },
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#rocketseat',
              }
            ]
          },
        ]
      }
    ],
    publishedAt: new Date('2022-07-19 08:05')
  },
  {
    id: 3,
    author: {
      name: 'Jeff',
      avatarUrl: 'https://github.com/diego3g.png',
      rule: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Fala galeraa 👋'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'span',
            value: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: 'jane.design/doctorcare',
              }
            ]
          },
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#novoprojeto',
              }
            ]
          },
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#nlw',
              }
            ]
          },
          {
            type: 'link',
            url: 'https://jane.design/doctorcare',
            children: [
              {
                type: 'span',
                value: '#rocketseat',
              }
            ]
          },
        ]
      }
    ],
    publishedAt: new Date('2022-07-19 08:05')
  }
]