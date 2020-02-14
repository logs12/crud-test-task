import { IAction } from 'actions/ActionCreatorTypings';

export function actionCreator<PayloadType>(
    type: string, payload: PayloadType
): IAction<PayloadType> {
    return {
        type,
        payload,
    }  as const;
}