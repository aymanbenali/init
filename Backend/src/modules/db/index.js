import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexFile';

const knex = Knex(knexConfig.development);

Model.knex(knex);

const testDb = async () => {
    console.log('just a test');
}

export default testDb;