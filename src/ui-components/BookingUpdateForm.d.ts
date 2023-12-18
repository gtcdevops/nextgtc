/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BookingUpdateFormInputValues = {
    name?: string;
    email?: string;
    contactno?: string;
    typeoftransfer?: string;
    pax?: string;
    luggage?: string;
    pickup?: string;
    dropoff?: string;
    postal?: string;
    flightno?: string;
    typeofvehicle?: string;
    fare?: string;
    date?: string;
    agree?: string;
    description?: string;
};
export declare type BookingUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    contactno?: ValidationFunction<string>;
    typeoftransfer?: ValidationFunction<string>;
    pax?: ValidationFunction<string>;
    luggage?: ValidationFunction<string>;
    pickup?: ValidationFunction<string>;
    dropoff?: ValidationFunction<string>;
    postal?: ValidationFunction<string>;
    flightno?: ValidationFunction<string>;
    typeofvehicle?: ValidationFunction<string>;
    fare?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    agree?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingUpdateFormOverridesProps = {
    BookingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    date?: PrimitiveOverrideProps<TextFieldProps>;
    agree?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookingUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    booking?: any;
    onSubmit?: (fields: BookingUpdateFormInputValues) => BookingUpdateFormInputValues;
    onSuccess?: (fields: BookingUpdateFormInputValues) => void;
    onError?: (fields: BookingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingUpdateFormInputValues) => BookingUpdateFormInputValues;
    onValidate?: BookingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookingUpdateForm(props: BookingUpdateFormProps): React.ReactElement;
