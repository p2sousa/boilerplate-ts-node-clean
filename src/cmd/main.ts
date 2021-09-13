/* eslint-disable no-console */
class Main {
  public async init() {
    console.info('app executed');
  }
}

const app = new Main();

(async () => {
  await app.init();
})();
