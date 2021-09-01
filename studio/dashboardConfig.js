export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612f69dc82ad55df8790cd8e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rmkiq43f',
                  apiId: '87a24355-e79b-403c-9411-23ade35249c5'
                },
                {
                  buildHookId: '612f69dcee3622efcd93636a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-23ow8auf',
                  apiId: 'de27cd59-424c-49d1-8e6f-2ca28b8368fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Khresterion/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-23ow8auf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
