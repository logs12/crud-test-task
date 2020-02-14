
export type PageNumberType = number;
export type PerPageType = number;
export type TotalType = number;
export type TotalPagesType = number;

export interface IPagination {
    page: PageNumberType;
    perPage: PerPageType;
    total: TotalType;
    totalPages: TotalPagesType;
};

export const paginationDefaultState = {    
    get state(): IPagination {
        return {
            page: 0,
            perPage: 0,
            total: 0,
            totalPages: 0,
        };
    }
}