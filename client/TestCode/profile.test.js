const profilemodule = require('../pages/profile');
test('check if values are empty', () => {
    // fullname, address1, address2, city, state, zipcode = profilemodule(fullname, address1, address2, city, state, zipcode);

    expect(fullname).not.toBeNull();
    expect(fullname).toBeLessThanOrEqual(50);

    expect(address1).not.toBeNull();
    expect(address1).toBeLessThanOrEqual(100);

    expect(address2).toBeLessThanOrEqual(100);

    expect(city).not.toBeNull();
    expect(city).toBeLessThanOrEqual(100);

    expect(state).not.toBeNull();

    expect(zipcode).not.toBeNull();
    expect(zipcode).toBeLessThanOrEqual(9);
    expect(zipcode).toBeGreaterThanOrEqual(5);
});