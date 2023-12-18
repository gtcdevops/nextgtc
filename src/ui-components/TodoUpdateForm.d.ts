/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoUpdateFormInputValues = {
    name?: string;
    email?: string;
    contactno?: number;
    typeoftransfer?: string;
    pax?: string;
    luggage?: string;
    pickup?: string;
    dropoff?: string;
    postal?: string;
    flightno?: string;
    typeofvehicle?: string;
    fare?: string;
    agree?: boolean;
    description?: string;
    date?: string;
    pickuptime?: string;
};
export declare type TodoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    contactno?: ValidationFunction<number>;
    typeoftransfer?: ValidationFunction<string>;
    pax?: ValidationFunction<string>;
    luggage?: ValidationFunction<string>;
    pickup?: ValidationFunction<string>;
    dropoff?: ValidationFunction<string>;
    postal?: ValidationFunction<string>;
    flightno?: ValidationFunction<string>;
    typeofvehicle?: ValidationFunction<string>;
    fare?: ValidationFunction<string>;
    agree?: ValidationFunction<boolean>;
    description?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    pickuptime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoUpdateFormOverridesProps = {
    TodoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    contactno?: PrimitiveOverrideProps<TextFieldProps>;
    typeoftransfer?: PrimitiveOverrideProps<TextFieldProps>;
    pax?: PrimitiveOverrideProps<TextFieldProps>;
    luggage?: PrimitiveOverrideProps<TextFieldProps>;
    pickup?: PrimitiveOverrideProps<TextFieldProps>;
    dropoff?: PrimitiveOverrideProps<TextFieldProps>;
    postal?: PrimitiveOverrideProps<TextFieldProps>;
    flightno?: PrimitiveOverrideProps<TextFieldProps>;
    typeofvehicle?: PrimitiveOverrideProps<TextFieldProps>;
    fare?: PrimitiveOverrideProps<TextFieldProps>;
    agree?: PrimitiveOverrideProps<SwitchFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    pickuptime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoUpdateFormProps = React.PropsWithChildren<{
    overrides?: TodoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    todo?: any;
    onSubmit?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onSuccess?: (fields: TodoUpdateFormInputValues) => void;
    onError?: (fields: TodoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onValidate?: TodoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TodoUpdateForm(props: TodoUpdateFormProps): React.ReactElement;
