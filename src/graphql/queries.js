/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppointments = /* GraphQL */ `
  query GetAppointments($id: ID!) {
    getAppointments(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getRehabCentre = /* GraphQL */ `
  query GetRehabCentre($id: ID!) {
    getRehabCentre(id: $id) {
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
export const listRehabCentres = /* GraphQL */ `
  query ListRehabCentres(
    $filter: ModelRehabCentreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRehabCentres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Email
        Fullname
        Password
        Phone
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
