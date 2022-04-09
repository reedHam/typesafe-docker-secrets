test("Reads Docker Secrets", async () => {
    const SECRETS = await import('../../src/startup/DockerSecrets');
    expect(SECRETS.test).toBe('test');
    expect(SECRETS['test-2']).toBe('test2');
});