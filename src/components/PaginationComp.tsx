import { Pagination } from '@elsevier/graphene';
import { useState } from 'react';
export function PaginationComp() {
    const [page, setPage] = useState<number>(1);
    return (
        <>
        <Pagination
            size="large"
            variant="Numbers"
            pageSize={10}
            currentPage={page}
            totalNumberOfItems={100}
            onCurrentPageChange={setPage}
            showNextAndPreviousButtons
            showToStartAndToEndButtons
        />
        </>
    );
}