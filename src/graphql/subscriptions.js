/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppointments = /* GraphQL */ `
  subscription OnCreateAppointments(
    $filter: ModelSubscriptionAppointmentsFilterInput
  ) {
    onCreateAppointments(filter: $filter) {
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
export const onUpdateAppointments = /* GraphQL */ `
  subscription OnUpdateAppointments(
    $filter: ModelSubscriptionAppointmentsFilterInput
  ) {
    onUpdateAppointments(filter: $filter) {
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
export const onDeleteAppointments = /* GraphQL */ `
  subscription OnDeleteAppointments(
    $filter: ModelSubscriptionAppointmentsFilterInput
  ) {
    onDeleteAppointments(filter: $filter) {
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
export const onCreateRehabCentre = /* GraphQL */ `
  subscription OnCreateRehabCentre(
    $filter: ModelSubscriptionRehabCentreFilterInput
  ) {
    onCreateRehabCentre(filter: $filter) {
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
export const onUpdateRehabCentre = /* GraphQL */ `
  subscription OnUpdateRehabCentre(
    $filter: ModelSubscriptionRehabCentreFilterInput
  ) {
    onUpdateRehabCentre(filter: $filter) {
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
export const onDeleteRehabCentre = /* GraphQL */ `
  subscription OnDeleteRehabCentre(
    $filter: ModelSubscriptionRehabCentreFilterInput
  ) {
    onDeleteRehabCentre(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
