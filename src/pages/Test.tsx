import React from "react";
import { Publication } from "@elsevier/graphene";

export default function Test() {
  type AuthorModel = {
    id: string;
    name: string;
    initials?: string;
    tooltipText?: string;
  };

  interface PublicationExample {
    id: number;
    displayTitle: string;
    authors: AuthorModel[];
    journal: string;
    date: string;
    documentType: string;
    doi: string;
    referenceNumber: number;
    access?: boolean;
    titleHref?: string;
    journalHref?: string;
  }

  const publicationData: PublicationExample[] = [
    {
      id: 1,
      displayTitle: "Deep Learning for Natural Language Processing",
      authors: [
        { id: "author-1", name: "Alice Johnson", initials: "AJ" },
        { id: "author-2", name: "Bob Smith", initials: "BS" },
      ],
      journal: "Journal of Machine Learning Research",
      date: "March 2023",
      documentType: "Article",
      doi: "10.1234/jmlr.2023.001",
      referenceNumber: 1,
      access: true,
      titleHref: "https://example.com/paper1",
      journalHref: "https://example.com/jmlr",
    },
    {
      id: 2,
      displayTitle: "Quantum Computing Applications in Drug Discovery",
      authors: [
        { id: "author-3", name: "Carol Davis", initials: "CD" },
        { id: "author-4", name: "David Wilson", initials: "DW" },
        { id: "author-5", name: "Emma Brown", initials: "EB" },
      ],
      journal: "Nature Chemistry",
      date: "February 2023",
      documentType: "Research Paper",
      doi: "10.1038/nature.2023.001",
      referenceNumber: 2,
      access: false,
      journalHref: "https://example.com/nature",
    },
    {
      id: 3,
      displayTitle: "Climate Change Mitigation Strategies: A Global Review",
      authors: [
        { id: "author-6", name: "Frank Miller", initials: "FM" },
        { id: "author-7", name: "Grace Lee", initials: "GL" },
        { id: "author-8", name: "Henry Zhang", initials: "HZ" },
        { id: "author-9", name: "Isabel Martinez", initials: "IM" },
        { id: "author-10", name: "Jack Chen", initials: "JC" },
      ],
      journal: "Environmental Science & Technology",
      date: "January 2023",
      documentType: "Review",
      doi: "10.1021/est.2023.001",
      referenceNumber: 3,
      access: true,
      titleHref: "https://example.com/paper3",
    },
  ];

  return (
    <>
      <h1 style={{ color: "black", marginBottom: "4rem" }}>testing components behaviour </h1>

      <div style={{ padding: '20px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {publicationData.map((pub) => (
            <Publication
              key={pub.id}
              displayTitle={pub.displayTitle}
              authors={pub.authors}
              journal={pub.journal}
              date={pub.date}
              documentType={pub.documentType}
              doi={pub.doi}
              referenceNumber={pub.referenceNumber}
              access={pub.access}
              titleHref={pub.titleHref}
              journalHref={pub.journalHref}
            />
          ))}
        </div>
      </div>

    </>
  );
}
