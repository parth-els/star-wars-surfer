import React, { useState } from 'react'
import { Header } from "@elsevier/graphene";
import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderComp() {
  const navigate = useNavigate();
  const location = useLocation();

  // sync active link with current URL
  const [activeLink, setActiveLink] = useState(location.pathname);

  const onLinkClick = (path: string) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <Header
      logoVariant={'Product'}
      productName={'Star Wars Data Explorer'}
      navigationPosition={'top'}
      navigationLinks={[
        {
          linkType: 'link',
          label: 'People',
          variant: 'list',
          onClick: () => onLinkClick('/people'),
          active: activeLink === '/people',
        },
        {
          linkType: 'link',
          label: 'Films',
          variant: 'list',
          onClick: () => onLinkClick('/films'),
          active: activeLink === '/films',
        },
      ]}
      showBorderBottom={true}
    />
  );
}
