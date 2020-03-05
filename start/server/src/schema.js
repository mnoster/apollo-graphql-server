const { gql } = require('apollo-server');

const typeDefs = gql`
type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }`;

module.exports = typeDefs;