import { Pagination } from '@elsevier/graphene';
import { useState } from 'react';

interface PaginationProps {
  onPageChange: (newPage: number) => void;
}
 
export function PaginationComp({ onPageChange }: PaginationProps) {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  return (
    <>
      <Pagination
        size="large"
        variant="Numbers"
        pageSize={10}
        currentPage={page}
        totalNumberOfItems={90}
        onCurrentPageChange={handlePageChange}
        showNextAndPreviousButtons
        showToStartAndToEndButtons
      />
    </>
  );
}