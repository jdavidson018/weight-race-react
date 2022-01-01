let users = [
    {
        name: "Jack Davidson",
        userId: 1,
        startWeight: 500.00,
        goalWeight: 69.69,
        weights: [
            { value: 204.00, dateLogged: new Date() },
            { value: 203.00, dateLogged: new Date() },
            { value: 202.00, dateLogged: new Date() },
            { value: 201.00, dateLogged: new Date() },
            { value: 200.00, dateLogged: new Date() },
            { value: 199.00, dateLogged: new Date() },
            { value: 198.00, dateLogged: new Date() },
            { value: 197.00, dateLogged: new Date() },
            { value: 196.00, dateLogged: new Date() },
        ]
    },
    {
        name: "Maddie Davidson",
        userId: 2,
        startWeight: 130.00,
        GoalWeight: 110.00,
        weights: [
            { value: 130.00, dateLogged: new Date() },
            { value: 129.00, dateLogged: new Date() },
            { value: 128.00, dateLogged: new Date() },
            { value: 127.00, dateLogged: new Date() },
            { value: 125.00, dateLogged: new Date() },
            { value: 120.00, dateLogged: new Date() },
            { value: 122.00, dateLogged: new Date() },
            { value: 110.00, dateLogged: new Date() },
            { value: 115.00, dateLogged: new Date() },
        ]
    },
    {
        name: "Ryan Baber",
        userId: 3,
        startWeight: 190.00,
        GoalWeight: 75.00,
        weights: [
            { value: 190.00, dateLogged: new Date() },
            { value: 189.00, dateLogged: new Date() },
            { value: 179.00, dateLogged: new Date() },
            { value: 169.00, dateLogged: new Date() },
            { value: 150.00, dateLogged: new Date() },
            { value: 180.00, dateLogged: new Date() },
            { value: 120.00, dateLogged: new Date() },
            { value: 200.00, dateLogged: new Date() },
            { value: 123.00, dateLogged: new Date() },
        ]
    }
];

export function getUsers() {
    return users;
}

export function getUser(number) {
    return users.find(
        user => user.userId === number
    );
}