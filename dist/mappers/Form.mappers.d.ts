import { FieldData } from 'rc-field-form/es/interface';
import { IValidationErrorData } from '../models';
declare function mapModelToFields<T extends {
    [key: string]: any;
}>(stateData: FieldData[], errors?: IValidationErrorData | null, params?: T | null): FieldData[];
declare function mapToFields<T extends {
    [key: string]: any;
}>(stateData: FieldData[], errors?: IValidationErrorData | null, data?: T | null, params?: T | null): FieldData[];
export declare const FormMappers: {
    mapModelToFields: typeof mapModelToFields;
    mapToFields: typeof mapToFields;
};
export {};
