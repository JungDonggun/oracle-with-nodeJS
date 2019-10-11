import config from 'config'

const databaseConfig = config.get('Customer.database')
const { username, password, connectString } = databaseConfig

const databaseSettings = {
  user          : process.env.NODE_ORACLEDB_USER || username,
  password      : process.env.NODE_ORACLEDB_PASSWORD || password,
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || connectString,
}

export default databaseSettings