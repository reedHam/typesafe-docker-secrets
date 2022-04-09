process.env = Object.assign(process.env, {
    SECRETS_DIR: './resources/run/secrets',
});

test("Reads Docker Secrets", async () => {
    try {
            const SECRETS = await import('../../src/startup/DockerSecrets');
    console.log(SECRETS);
    expect(SECRETS.default).toEqual({
        "test": 8675309,
        "test-2": "THIS_IS_THE_SECOND_SECRET"
    });
    } catch (e) {
        console.log(e);
        throw e;
    }

});