// STRETCH
/**
vin     string	required, unique
make	string	required
model	string	required
mileage	numeric	required
title	string	optional
transmission	string	optional
 */

const cars = [
    {
        vin: '1234567901234567',
        make: 'toyota',
        model: 'prius',
        mileage: '525600',
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '1234567901234568',
        make: 'honda',
        model: 'civic',
        mileage: '192837192847',
        title: 'hand-me down',
        transmission: 'auto'
    },
    {
        vin: '1234567901234569',
        make: 'toyota',
        model: 'tacoma',
        mileage: '10',
        title: 'compensating',
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}