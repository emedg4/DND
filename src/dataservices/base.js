const { Pool } = require('pg')

const config = {
    user    : process.env.PG_USER,
    host    : process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASS,
    port    : process.env.PG_PORT
}

const execProcedure = async (procedureName, paramsArray = []) => {
    let pool = new Pool(config)
    await pool.connect()
    try {
        const request = pool.request();
        /**
         * Determines if the output field was supplied, then
         * the parameter configuration is established, otherwise, the field
         * is considered as an input parameter.
         */
        if (paramsArray.length > 0) {

            paramsArray.forEach(e => {
                if (typeof e.output === "boolean" || e.output)
                request.output(e.name, e.dbType, e.value || null);
                else
                request.input( e.name, e.dbType, e.value );
            });

        }
        
        const result = await request.execute(procedureName);

        return { rows: result.recordset };

    } catch (error) {
        throw new Error( error );
    }
}

/**
 * Event listener dispatched on connection error
 */
pool.on('error', err => {
    throw new Error(`An error has ocurred trying to connect: ${err}`)
})

module.exports = execProcedure;

/**
 * HOW MANY PROCEDURES DO WE NEED?
 * ===================
 * USERS
 * ===================
 * CREATE USER
 * MODIFY USER
 * DELETE USER
 * GET USERS
 * 
 * 
 * 
 * 
 * 
 */

    
 