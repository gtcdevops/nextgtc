/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBooking } from "../graphql/mutations";
const client = generateClient();
export default function BookingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    contactno: "",
    typeoftransfer: "",
    pax: "",
    luggage: "",
    pickup: "",
    dropoff: "",
    postal: "",
    flightno: "",
    typeofvehicle: "",
    fare: "",
    date: "",
    agree: "",
    description: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [contactno, setContactno] = React.useState(initialValues.contactno);
  const [typeoftransfer, setTypeoftransfer] = React.useState(
    initialValues.typeoftransfer
  );
  const [pax, setPax] = React.useState(initialValues.pax);
  const [luggage, setLuggage] = React.useState(initialValues.luggage);
  const [pickup, setPickup] = React.useState(initialValues.pickup);
  const [dropoff, setDropoff] = React.useState(initialValues.dropoff);
  const [postal, setPostal] = React.useState(initialValues.postal);
  const [flightno, setFlightno] = React.useState(initialValues.flightno);
  const [typeofvehicle, setTypeofvehicle] = React.useState(
    initialValues.typeofvehicle
  );
  const [fare, setFare] = React.useState(initialValues.fare);
  const [date, setDate] = React.useState(initialValues.date);
  const [agree, setAgree] = React.useState(initialValues.agree);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setEmail(initialValues.email);
    setContactno(initialValues.contactno);
    setTypeoftransfer(initialValues.typeoftransfer);
    setPax(initialValues.pax);
    setLuggage(initialValues.luggage);
    setPickup(initialValues.pickup);
    setDropoff(initialValues.dropoff);
    setPostal(initialValues.postal);
    setFlightno(initialValues.flightno);
    setTypeofvehicle(initialValues.typeofvehicle);
    setFare(initialValues.fare);
    setDate(initialValues.date);
    setAgree(initialValues.agree);
    setDescription(initialValues.description);
    setErrors({});
  };
  const validations = {
    name: [],
    email: [],
    contactno: [],
    typeoftransfer: [],
    pax: [],
    luggage: [],
    pickup: [],
    dropoff: [],
    postal: [],
    flightno: [],
    typeofvehicle: [],
    fare: [],
    date: [],
    agree: [],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          email,
          contactno,
          typeoftransfer,
          pax,
          luggage,
          pickup,
          dropoff,
          postal,
          flightno,
          typeofvehicle,
          fare,
          date,
          agree,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createBooking.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookingCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Contactno"
        isRequired={false}
        isReadOnly={false}
        value={contactno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno: value,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.contactno ?? value;
          }
          if (errors.contactno?.hasError) {
            runValidationTasks("contactno", value);
          }
          setContactno(value);
        }}
        onBlur={() => runValidationTasks("contactno", contactno)}
        errorMessage={errors.contactno?.errorMessage}
        hasError={errors.contactno?.hasError}
        {...getOverrideProps(overrides, "contactno")}
      ></TextField>
      <TextField
        label="Typeoftransfer"
        isRequired={false}
        isReadOnly={false}
        value={typeoftransfer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer: value,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.typeoftransfer ?? value;
          }
          if (errors.typeoftransfer?.hasError) {
            runValidationTasks("typeoftransfer", value);
          }
          setTypeoftransfer(value);
        }}
        onBlur={() => runValidationTasks("typeoftransfer", typeoftransfer)}
        errorMessage={errors.typeoftransfer?.errorMessage}
        hasError={errors.typeoftransfer?.hasError}
        {...getOverrideProps(overrides, "typeoftransfer")}
      ></TextField>
      <TextField
        label="Pax"
        isRequired={false}
        isReadOnly={false}
        value={pax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax: value,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.pax ?? value;
          }
          if (errors.pax?.hasError) {
            runValidationTasks("pax", value);
          }
          setPax(value);
        }}
        onBlur={() => runValidationTasks("pax", pax)}
        errorMessage={errors.pax?.errorMessage}
        hasError={errors.pax?.hasError}
        {...getOverrideProps(overrides, "pax")}
      ></TextField>
      <TextField
        label="Luggage"
        isRequired={false}
        isReadOnly={false}
        value={luggage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage: value,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.luggage ?? value;
          }
          if (errors.luggage?.hasError) {
            runValidationTasks("luggage", value);
          }
          setLuggage(value);
        }}
        onBlur={() => runValidationTasks("luggage", luggage)}
        errorMessage={errors.luggage?.errorMessage}
        hasError={errors.luggage?.hasError}
        {...getOverrideProps(overrides, "luggage")}
      ></TextField>
      <TextField
        label="Pickup"
        isRequired={false}
        isReadOnly={false}
        value={pickup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup: value,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.pickup ?? value;
          }
          if (errors.pickup?.hasError) {
            runValidationTasks("pickup", value);
          }
          setPickup(value);
        }}
        onBlur={() => runValidationTasks("pickup", pickup)}
        errorMessage={errors.pickup?.errorMessage}
        hasError={errors.pickup?.hasError}
        {...getOverrideProps(overrides, "pickup")}
      ></TextField>
      <TextField
        label="Dropoff"
        isRequired={false}
        isReadOnly={false}
        value={dropoff}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff: value,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.dropoff ?? value;
          }
          if (errors.dropoff?.hasError) {
            runValidationTasks("dropoff", value);
          }
          setDropoff(value);
        }}
        onBlur={() => runValidationTasks("dropoff", dropoff)}
        errorMessage={errors.dropoff?.errorMessage}
        hasError={errors.dropoff?.hasError}
        {...getOverrideProps(overrides, "dropoff")}
      ></TextField>
      <TextField
        label="Postal"
        isRequired={false}
        isReadOnly={false}
        value={postal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal: value,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.postal ?? value;
          }
          if (errors.postal?.hasError) {
            runValidationTasks("postal", value);
          }
          setPostal(value);
        }}
        onBlur={() => runValidationTasks("postal", postal)}
        errorMessage={errors.postal?.errorMessage}
        hasError={errors.postal?.hasError}
        {...getOverrideProps(overrides, "postal")}
      ></TextField>
      <TextField
        label="Flightno"
        isRequired={false}
        isReadOnly={false}
        value={flightno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno: value,
              typeofvehicle,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.flightno ?? value;
          }
          if (errors.flightno?.hasError) {
            runValidationTasks("flightno", value);
          }
          setFlightno(value);
        }}
        onBlur={() => runValidationTasks("flightno", flightno)}
        errorMessage={errors.flightno?.errorMessage}
        hasError={errors.flightno?.hasError}
        {...getOverrideProps(overrides, "flightno")}
      ></TextField>
      <TextField
        label="Typeofvehicle"
        isRequired={false}
        isReadOnly={false}
        value={typeofvehicle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle: value,
              fare,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.typeofvehicle ?? value;
          }
          if (errors.typeofvehicle?.hasError) {
            runValidationTasks("typeofvehicle", value);
          }
          setTypeofvehicle(value);
        }}
        onBlur={() => runValidationTasks("typeofvehicle", typeofvehicle)}
        errorMessage={errors.typeofvehicle?.errorMessage}
        hasError={errors.typeofvehicle?.hasError}
        {...getOverrideProps(overrides, "typeofvehicle")}
      ></TextField>
      <TextField
        label="Fare"
        isRequired={false}
        isReadOnly={false}
        value={fare}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare: value,
              date,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.fare ?? value;
          }
          if (errors.fare?.hasError) {
            runValidationTasks("fare", value);
          }
          setFare(value);
        }}
        onBlur={() => runValidationTasks("fare", fare)}
        errorMessage={errors.fare?.errorMessage}
        hasError={errors.fare?.hasError}
        {...getOverrideProps(overrides, "fare")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date: value,
              agree,
              description,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Agree"
        isRequired={false}
        isReadOnly={false}
        value={agree}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.agree ?? value;
          }
          if (errors.agree?.hasError) {
            runValidationTasks("agree", value);
          }
          setAgree(value);
        }}
        onBlur={() => runValidationTasks("agree", agree)}
        errorMessage={errors.agree?.errorMessage}
        hasError={errors.agree?.hasError}
        {...getOverrideProps(overrides, "agree")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              typeoftransfer,
              pax,
              luggage,
              pickup,
              dropoff,
              postal,
              flightno,
              typeofvehicle,
              fare,
              date,
              agree,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
