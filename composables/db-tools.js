const sql = require('sql-bricks-postgres');
const pg = require('pg');

module.exports = {

  query: async (q) => {
    let res;
    let pool;
    try {
      pool = new pg.Pool({
        connectionString: process.env.connection_string, 
        maxConnections: 15, 
        statement_timeout: 480000,
        connectionTimeoutMillis: 5000, 
        idleTimeoutMillis: 3000
      });
    } catch(error) {
      console.error(error, 'error connecting to database');
      // pool = new pg.Pool({
      //   connectionString: process.env.connection_string, 
      //   maxConnections: 15, 
      //   statement_timeout: 480000,
      //   connectionTimeoutMillis: 5000, 
      //   idleTimeoutMillis: 3000
      // });
    }

    try {
      res = await pool.query(q);
    } catch(err) {
      console.error(q, 'error query');
      console.error(err.message);
      res = err;
    } finally {
      pool.end();
    }
    return res;
  },

  prepData: function(data) {
      let newData = Object.assign({}, data);

      for(let key in newData) {
        if(newData[key] === undefined) {
          delete newData[key];
        }
        if(Array.isArray(newData[key]) || newData[key] === Object(newData[key])) {
          newData[key] = JSON.stringify(newData[key]);
          // newData[key] = newData[key].replace(/'/g, "''");
        } else {
          if(newData[key] && isNaN(newData[key])) {
            // newData[key] = newData[key].replace(/'/g, "''");
          }
        }
      }
      return newData;
  },

  paramsToObject(qs) {
      qs = qs || location.search.slice(1);

      var pairs = qs.split('&');
      var result = {};
      pairs.forEach(function(p) {
          var pair = p.split('=');
          var key = pair[0];
          var value = decodeURIComponent(pair[1] || '');

          if( result[key] ) {
              if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
                  result[key].push( value );
              } else {
                  result[key] = [ result[key], value ];
              }
          } else {
              result[key] = value;
          }
      });

      return JSON.parse(JSON.stringify(result));
  },

  insertData: function(table, data) {
    let insertStatement = sql.insert(table, this.prepData(data)).toParams();
    insertStatement.text += ` RETURNING *`;
    return insertStatement;
  },

  updateData: function(table, data, where) {
    where = where.replace(/'/ig, '');
      where = where.replace(/ AND /ig, '&');
      where = this.paramsToObject(where);
      let updateStatement = sql.update(table, this.prepData(data)).where(where).toParams();
      updateStatement.text += ` RETURNING *`;
      return updateStatement;
  },

  insertMultiple: async function(table, data) {
    for(let i in data) {
      data[i] = this.prepData(data[i]);
    }
    let insertStatement = sql.insertInto(table, data).toParams();
    insertStatement.text += ` RETURNING *`;

    let res = await this.query(insertStatement);

    if(res.rows)
      return res.rows
    else
      return {error: res}
  },

  updateMultiple: async function(table, data, where_field) {
    for(let i in data) {
      data[i] = this.prepData(data[i]);
    }

    if(!where_field) where_field = 'id';

    // UPSERT COMMAND
    let insertStatement = sql.insertInto(table, data).onConflict(where_field).doUpdate().toParams();
    insertStatement.text += ` RETURNING *`;

    let res = await this.query(insertStatement);

    if(res.rows)
      return res.rows
    else
      return {error: res}
  },

  in: async function(table, data) {
    let res = await this.query(this.insertData(table, data));

    if(res.rows)
      return res.rows
    else
      return {error: res}
  },

  up: async function(table, data, where) {
    let res = await this.query(this.updateData(table, data, where));

    if(res.rows)
      return res.rows;
    else
      return {error: res}
  },

  exists: async function(table, where) {
    let exists = await this.query(`SELECT * FROM ${table} WHERE ${where}`);
    exists = (exists.rows.length > 0);

    return exists;
  },

  getOne: async function(query) {
    let data = await this.query(query);
    data = data.rows[0];

    return data;
  },

  getRows: async function(query) {
    let data = await this.query(query);
    data = data.rows;

    return data;
  }
}