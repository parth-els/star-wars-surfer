import React from 'react'
import { Footer } from '@elsevier/graphene';

export default function FooterComp() {
  return (
    <Footer
      socialItems={[
        {
          id: 'facebook',
          href: 'https://www.facebook.com/',
          target: '_blank',
          iconRight: 'facebook-logo',
          'aria-label': 'facebook'
        },
        {
          id: 'messenger',
          href: 'https://www.facebook.com/',
          target: '_blank',
          iconRight: 'facebook-messenger',
          'aria-label': 'messenger'
        }
      ]}
      productMenuItems={[
        {
          id: 'about',
          href: '',
          label: 'About',
          target: '_blank'
        },
        {
          id: 'content_coverage',
          href: '',
          label: 'Content Coverage',
          target: '_blank'
        }
      ]}
      utilityMenuItems={[
        {
          id: 'custom menu link',
          label: 'Custom menu link'
        }
      ]}
    />
  )
}
