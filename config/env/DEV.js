const masterMongoDBName = process.env.APP_DB || 'Daas';

const mongo = {
  host: process.env.MONGO_HOST || '127.0.0.1',
  port: process.env.MONGO_PORT || 27017
};

const mongoURL = ('mongodb://' + mongo.host + ':' + mongo.port + '/' +
  masterMongoDBName);
  if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
    mongoURL = connection_string;
  }
module.exports = {
  WWW_PORT: process.env.ZYNLA_WWW_PORT || process.env.PORT || 3000,
  MONGO_MASTER_DB_NAME: masterMongoDBName,
  MONGO_MASTER_SERVER: mongo,
  MONGO_URL: mongoURL,
  NEO4J_HOST: 'localhost',
  NEO4J_BOLT_URL: ('bolt://localhost'),
  NEO4J_USR: 'neo4j',
  NEO4J_PWD: 'neoisgraph'
};
