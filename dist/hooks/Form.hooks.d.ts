import { FieldData } from 'rc-field-form/es/interface';
import { IUpdateModel, IError } from '../models';
declare type TBranch = {
    [key: string]: any;
} | null;
declare type TValidation = (fieldsNames: string[], model?: TBranch, errors?: IError | null, initModel?: TBranch) => {
    fields: FieldData[];
};
export declare const useFormValidation: TValidation;
declare type TUpdateValidation = (fieldsNames: string[], model?: IUpdateModel<TBranch> | null, errors?: IError | null, initModel?: TBranch) => {
    fields: FieldData[];
};
export declare const useUpdateFormValidation: TUpdateValidation;
declare type TFormMapper = (fieldsNames: string[], data: Object | null, params?: Object | null, errors?: IError | null) => {
    fields: FieldData[];
    setField: (params: FieldData) => void;
    baseError?: string;
};
export declare const useFormMapper: TFormMapper;
export {};
