import { DataSource } from 'typeorm';
import { Memo } from './memo';

export const MySQLSource = new DataSource({
    type: 'mysql',
    host: 'db',
    port: 3307,
    username: process.env.USERNAME || 'root',
    password: process.env.PASSWORD || 'root',
    database: 'intranet',
    synchronize: true,
    logging: false,
    entities: [ Memo ],
    migrations: [],
    subscribers: []
});

export function dataSourceStart() {
    MySQLSource.initialize()
    .then(() => (
        console.log('Initialize the data source...')
    ))
    .catch(e => (
        console.error('Erro: ', e)
    ));
}