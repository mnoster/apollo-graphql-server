const { gql } = require('apollo-server');

// Queries enable clients to fetch data, but not to modify data. To enable
// clients to modify data, our schema needs to define some mutations.

// The Mutation type defines three available mutations for clients to execute: 
// bookTrips, cancelTrip, and login.

const typeDefs = gql`
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
  
  type Rocket {
    id: ID!
    name: String
    type: String
  }
  
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }
  
  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }
  
  enum PatchSize {
    SMALL
    LARGE
  }

  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
  `;

module.exports = typeDefs;