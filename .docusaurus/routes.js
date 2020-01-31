
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/newdocs/',
  component: ComponentCreator('/newdocs/'),
  exact: true,
  
},
{
  path: '/newdocs/blog',
  component: ComponentCreator('/newdocs/blog'),
  exact: true,
  
},
{
  path: '/newdocs/blog/hello-world',
  component: ComponentCreator('/newdocs/blog/hello-world'),
  exact: true,
  
},
{
  path: '/newdocs/blog/hola',
  component: ComponentCreator('/newdocs/blog/hola'),
  exact: true,
  
},
{
  path: '/newdocs/blog/tags',
  component: ComponentCreator('/newdocs/blog/tags'),
  exact: true,
  
},
{
  path: '/newdocs/blog/tags/docusaurus',
  component: ComponentCreator('/newdocs/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/newdocs/blog/tags/facebook',
  component: ComponentCreator('/newdocs/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/newdocs/blog/tags/hello',
  component: ComponentCreator('/newdocs/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/newdocs/blog/tags/hola',
  component: ComponentCreator('/newdocs/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/newdocs/blog/welcome',
  component: ComponentCreator('/newdocs/blog/welcome'),
  exact: true,
  
},
{
  path: '/newdocs/index%20copy',
  component: ComponentCreator('/newdocs/index%20copy'),
  exact: true,
  
},
{
  path: '/newdocs/docs/:route',
  component: ComponentCreator('/newdocs/docs/:route'),
  
  routes: [
{
  path: '/newdocs/docs/doc1',
  component: ComponentCreator('/newdocs/docs/doc1'),
  exact: true,
  
},
{
  path: '/newdocs/docs/doc2',
  component: ComponentCreator('/newdocs/docs/doc2'),
  exact: true,
  
},
{
  path: '/newdocs/docs/doc3',
  component: ComponentCreator('/newdocs/docs/doc3'),
  exact: true,
  
},
{
  path: '/newdocs/docs/extensions/actions',
  component: ComponentCreator('/newdocs/docs/extensions/actions'),
  exact: true,
  
},
{
  path: '/newdocs/docs/extensions/building-an-extension',
  component: ComponentCreator('/newdocs/docs/extensions/building-an-extension'),
  exact: true,
  
},
{
  path: '/newdocs/docs/extensions/intro',
  component: ComponentCreator('/newdocs/docs/extensions/intro'),
  exact: true,
  
},
{
  path: '/newdocs/docs/extensions/local-setup',
  component: ComponentCreator('/newdocs/docs/extensions/local-setup'),
  exact: true,
  
},
{
  path: '/newdocs/docs/extensions/publishing',
  component: ComponentCreator('/newdocs/docs/extensions/publishing'),
  exact: true,
  
},
{
  path: '/newdocs/docs/extensions/themes',
  component: ComponentCreator('/newdocs/docs/extensions/themes'),
  exact: true,
  
},
{
  path: '/newdocs/docs/mdx',
  component: ComponentCreator('/newdocs/docs/mdx'),
  exact: true,
  
},
{
  path: '/newdocs/docs/self-hosting/docker',
  component: ComponentCreator('/newdocs/docs/self-hosting/docker'),
  exact: true,
  
},
{
  path: '/newdocs/docs/self-hosting/ec2-nginx',
  component: ComponentCreator('/newdocs/docs/self-hosting/ec2-nginx'),
  exact: true,
  
},
{
  path: '/newdocs/docs/self-hosting/getting-started',
  component: ComponentCreator('/newdocs/docs/self-hosting/getting-started'),
  exact: true,
  
},
{
  path: '/newdocs/docs/self-hosting/heroku',
  component: ComponentCreator('/newdocs/docs/self-hosting/heroku'),
  exact: true,
  
},
{
  path: '/newdocs/docs/self-hosting/preconfigured-image',
  component: ComponentCreator('/newdocs/docs/self-hosting/preconfigured-image'),
  exact: true,
  
},
{
  path: '/newdocs/docs/specification/encryption',
  component: ComponentCreator('/newdocs/docs/specification/encryption'),
  exact: true,
  
},
{
  path: '/newdocs/docs/specification/sync',
  component: ComponentCreator('/newdocs/docs/specification/sync'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
