import React from 'react'
// import StarWarsLogo from '../assets/starwarslogo.png'

import { Header } from "@elsevier/graphene";
import { useState } from "react";

export default function HeaderComp() {
  const [activeLink, setActiveLink] = useState('#item1');

  const onLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <>
 <Header
    logoVariant={'Product'}
    productName={'Star Wars Data Explorer'}
    navigationPosition={'top'}
    navigationLinks={[
      { linkType: 'link', label: 'Item 1', variant: 'list', onClick: () => onLinkClick('#item1'), active: activeLink === '#item1' },
      { linkType: 'link', label: 'Item 2', variant: 'list', onClick: () => onLinkClick('#item2'), active: activeLink === '#item2' },
    ]}
    showBorderBottom={true}
  />
    </>
  );
}