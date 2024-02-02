const axios = require('axios')
const pool = require('../database/db')

let firstTenResults = {};
exports.ticketData = (req, res) => {
    fetch('https://api.wazirx.com/api/v2/tickers')
        .then(res => res.json())
        .then(result => {
            const keys = Object.keys(result)

            const firstTenKeys = keys.slice(0, 10)

            firstTenKeys.forEach(key => {
                firstTenResults[key] = result[key]
            })

            const tenKeys = Object.keys(firstTenResults)
            tenKeys.forEach(newKey => {
                pool.query(`insert into wazirx (name, last, buy, sell, volume, base_unit) values ('${firstTenResults[newKey].name}', ${firstTenResults[newKey].last}, ${firstTenResults[newKey].buy}, ${firstTenResults[newKey].sell}, ${firstTenResults[newKey].volume}, '${firstTenResults[newKey].base_unit}'
                    );`)
            })
        })
        res.status(201).json({
            status: 'success'
        })
}

exports.updateTicket = (req, res) => {
    fetch('https://api.wazirx.com/api/v2/tickers')
        .then(res => res.json())
        .then(result => {
            const keys = Object.keys(result)

            const firstTenKeys = keys.slice(0, 10)

            firstTenKeys.forEach(key => {
                firstTenResults[key] = result[key]
            })

            const tenKeys = Object.keys(firstTenResults)
            tenKeys.forEach(newKey => {
                pool.query(`update wazirx set name = '${firstTenResults[newKey].name}', last = ${firstTenResults[newKey].last},buy = ${firstTenResults[newKey].buy}, sell = ${firstTenResults[newKey].sell}, volume = ${firstTenResults[newKey].volume}, base_unit = '${firstTenResults[newKey].base_unit}' where name = '${firstTenResults[newKey].name}'`)
            })
        })

        res.status(201).json({
            status: 'success'
        })
}

exports.getTicket = (req, res) => {
    pool.query(`SELECT * FROM wazirx`, (err, results) => {
        // if(err) throw new Error
        res.status(200).json(results.rows)
    })
}


