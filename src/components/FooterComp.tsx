import React from 'react'
import { Footer } from '@elsevier/graphene';
export default function FooterComp() {
  return (
    <Footer
      socialItems={[
        // {
        //   id: 'facebook',
        //   href: 'https://www.facebook.com/',
        //   target: '_blank',
        //   iconRight: 'facebook-logo',
        //   'aria-label': 'facebook'
        // },
        // {
        //   id: 'messenger',
        //   href: 'https://www.facebook.com/',
        //   target: '_blank',
        //   iconRight: 'facebook-messenger',
        //   'aria-label': 'messenger'
        // }
      ]}
      productMenuItems={[
        {
          id: 'Jira Ticket',
          href: 'https://elsevier.atlassian.net/jira/software/c/projects/GPHN/boards/8948?quickFilter=60217&selectedIssue=GPHN-2377',
          label: 'About',
          target: '_blank'
        },
        {
          id: 'Graphene Docs',
          href: 'https://graphene.elsevier.com/',
          label: 'Graphene Docs',
          target: '_blank'
        },
        {
          id: 'SWAPI Docs',
          href: 'https://swapi.py4e.com/documentation#base',
          label: 'SWAPI Docs',
          target: '_blank'
        },
        // https://swapi.py4e.com/documentation#base
       
      ]}
      utilityMenuItems={[
        {
          id: 'Home Page',
          href: '/',
          label: 'Home Page'
        }
      ]}
    />
  )
}
