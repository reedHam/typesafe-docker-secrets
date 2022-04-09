import 'dotenv/config';
import SECRETS from '../../src/startup/DockerSecrets';

test("Reads Docker Secrets", async () => {
    try {
        expect(SECRETS).toEqual({
            "test": 8675309,
            "test-2": "THIS_IS_THE_SECOND_SECRET",
            "secretObject": {"test": 123}
        });
    } catch (e) {
        console.log(e);
        throw e;
    }
});