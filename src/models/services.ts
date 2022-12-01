import { MySQLSource, dataSourceStart } from "./database";
import { Memo } from "./memo";

export default class Service {
    start() {
        dataSourceStart();
    }

    newMemo(memo: Memo) {
        MySQLSource.manager.save(memo);
        return memo;
    }

    async getMemos() {
        return await MySQLSource.manager.find(Memo);
    }
}