// __tests__/user-test.js
jest.mock('../funciones/request.js');

import * as user from '../funciones/user';

// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});
it('works with resolves', () => {
    expect.assertions(1);
    return expect(user.getUserName(5)).resolves.toEqual('Paul');
});