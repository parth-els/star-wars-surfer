import { Pagination } from '@elsevier/graphene';
import { useState } from 'react';

interface PaginationProps {
  onPageChange: (newPage: number) => void;
  totalNumberOfItemsInTheData: number;
}
 
export function PaginationComp({ onPageChange, totalNumberOfItemsInTheData }: PaginationProps) {
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
        totalNumberOfItems={totalNumberOfItemsInTheData}
        onCurrentPageChange={handlePageChange}
        showNextAndPreviousButtons
        showToStartAndToEndButtons
      />
    </>
  );
}