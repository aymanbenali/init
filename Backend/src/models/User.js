import {
    Model
} from 'objection';

class User extends Model {
    static get tableName() {
        return 'User';
    }
}

export default User;
