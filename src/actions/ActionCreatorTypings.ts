export interface IAction<PayloadType> {
    type: string;
    payload: PayloadType;
}