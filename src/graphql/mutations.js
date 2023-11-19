/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAppointments = /* GraphQL */ `
  mutation CreateAppointments(
    $input: CreateAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    createAppointments(input: $input, condition: $condition) {
      id
      address
      category
      centername
      contact
      date
      email
      state
      status
      time
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAppointments = /* GraphQL */ `
  mutation UpdateAppointments(
    $input: UpdateAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    updateAppointments(input: $input, condition: $condition) {
      id
      address
      category
      centername
      contact
      date
      email
      state
      status
      time
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAppointments = /* GraphQL */ `
  mutation DeleteAppointments(
    $input: DeleteAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    deleteAppointments(input: $input, condition: $condition) {
      id
      address
      category
      centername
      contact
      date
      email
      state
      status
      time
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRehabCentre = /* GraphQL */ `
  mutation CreateRehabCentre(
    $input: CreateRehabCentreInput!
    $condition: ModelRehabCentreConditionInput
  ) {
    createRehabCentre(input: $input, condition: $condition) {
      id
      about
      address
      category
      contact
      name
      state
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRehabCentre = /* GraphQL */ `
  mutation UpdateRehabCentre(
    $input: UpdateRehabCentreInput!
    $condition: ModelRehabCentreConditionInput
  ) {
    updateRehabCentre(input: $input, condition: $condition) {
      id
      about
      address
      category
      contact
      name
      state
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRehabCentre = /* GraphQL */ `
  mutation DeleteRehabCentre(
    $input: DeleteRehabCentreInput!
    $condition: ModelRehabCentreConditionInput
  ) {
    deleteRehabCentre(input: $input, condition: $condition) {
      id
      about
      address
      category
      contact
      name
      state
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      Email
      Fullname
      Password
      Phone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      Email
      Fullname
      Password
      Phone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      Email
      Fullname
      Password
      Phone
      createdAt
      updatedAt
      __typename
    }
  }
`;
