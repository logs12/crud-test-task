// @flow

import './index.scss';
import React from 'react';
import { 
    IPagination,
    paginationDefaultState,
} from 'models/PaginationModel';

interface PaginationPropsType extends IPagination{
    entityName: string,
    changePage: (page: number) => void,
};

const Pagination = ({
    page = paginationDefaultState.state.page,
    totalPages = paginationDefaultState.state.totalPages,
    total = paginationDefaultState.state.total,
    perPage = paginationDefaultState.state.perPage,
    entityName = 'elements',
    changePage,
}: PaginationPropsType) => {
    const toNextPage = () => {
        changePage(page + 1);
    };

    const toPreviousPage = () => {
        changePage(page - 1);
    };

    const toFirstPage = () => {
        changePage(0);
    };

    const toLastPage = () => {
        changePage(totalPages - 1);
    };


    const disableGoForward = page === totalPages;
    const disableGoBack = page === 1;

    return (
        <div className="pagination">
            <button
                className="first_page"
                disabled={disableGoBack}
                onClick={toFirstPage}
            >
                {'<<'}
            </button>
            <button
                className="chevron_left"
                disabled={disableGoBack}
                onClick={toPreviousPage}
            >
                {'Previous'}
            </button>
            <span className="pagination--current">{`Page ${page}`}</span>
            <button
                className="chevron_right"
                disabled={disableGoForward}
                onClick={toNextPage}
            >
                {'Next'}
            </button>
            <button
                className="last_page"
                disabled={disableGoForward}
                onClick={toLastPage}
            >
                {'>>'}
            </button>
            {total && <span className="pagination--info">{`${total} ${entityName} in total`}</span>}
        </div>
    );
}

export default Pagination;