import { DataSource } from 'typeorm';
import { Memo } from './memo';

export const MySQLSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root',
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