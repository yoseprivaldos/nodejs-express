function createApp() {
  const routes = {
    GET: {},
    POST: {},
  };

  const app = {
    get(path, handler) {
      routes.GET[path] = handler; // app('/', () => {}) ->
    },
    post(path, handler) {
      routes.POST[path] = handler;
    },
    use(middleware) {
      app.middleware = middleware;
    },
    handleRequest(req, res) {
      const { method, url } = req;
      const handler = routes[method][url];

      if (app.middleware) {
        app.middleware(req, res, () => {
          if (handler) {
            handler(req, res);
          } else {
            res.end("404 Not Found");
          }
        });
      } else {
        if (handler) {
          handler(req, res);
        } else {
          res.end("404 Not Found");
        }
      }
    },
  };
  return app;
}
