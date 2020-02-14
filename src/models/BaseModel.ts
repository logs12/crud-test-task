
import { 
    IPagination,
    paginationDefaultState,
} from 'models/PaginationModel';

export type PageNumberType = number;
export type PerPageType = number;
export type TotalType = number;
export type TotalPagesType = number;
export type PendingType = boolean;

export interface IBaseModelData {
    pagination: IPagination;
    pending: PendingType;
};

export const baseDataModelDefaultState = {    
    get state(): IBaseModelData {
        return {
            pagination: paginationDefaultState.state,
            pending: false,
        };
    }
}

export const baseDataModelInitialState= {
    get state () {
        return baseDataModelDefaultState.state;
    }
}