var faker = require('faker')


export default class users {
    static randomUser() {
        var NewUser = {
            id: null,
            userName: faker.internet.userName(),
            password: faker.internet.password(6)
        }
        return NewUser;
    }
}