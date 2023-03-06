const userService = require("../services/user-service");
const postService = require("../services/post-service");
const homeService = require("../services/home-service");
const serviceService = require("../services/service-service");
const ourClientService = require("../services/ourClient-service");
const footerService = require("../services/footer-service");
const aboutService = require("../services/about-service");

module.exports = function (app) {
  app.get("/users", (req, res) =>
    userService.findAllUsers().then((allUsers) => res.json(allUsers))
  );
  app.get("/users/:bid", (req, res) =>
    userService.findUsersById(req.params["bid"]).then((User) => res.json(User))
  );
  app.delete("/users/:bid", (req, res) =>
    userService
      .deleteUserById(req.params["bid"])
      .then((status) => res.send(status))
  );
  app.post("/users", (req, res) =>
    userService.addNewUser(req.body).then((newUser) => res.json(newUser))
  );
  app.put("users/:bid", (req, res) =>
    userService
      .updateUser(req.params["bid"], req.body)
      .then((status) => res.send(status))
  );

  app.get("/posts", (req, res) =>
    postService.findAllPosts().then((allPosts) => res.json(allPosts))
  );
  app.get("/posts/:bid", (req, res) =>
    postService.findPostsById(req.params["bid"]).then((Post) => res.json(Post))
  );
  app.delete("/posts/:bid", (req, res) =>
    postService
      .deletePostById(req.params["bid"])
      .then((status) => res.send(status))
  );
  app.post("/posts/", (req, res) =>
    postService.addNewPost(req.body).then((newPost) => res.json(newPost))
  );
  app.put("/posts/:bid", (req, res) =>
    postService
      .updatePost(req.params["bid"], req.body)
      .then((status) => res.send(status))
  );

  app.get("/home", (req, res) =>
    homeService.findAllHomes().then((allHomes) => res.json(allHomes))
  );
  app.get("/home/:bid", (req, res) =>
    homeService.findHomesById(req.params["bid"]).then((Home) => res.json(Home))
  );
  app.delete("/home/:bid", (req, res) =>
    homeService
      .deleteHomeById(req.params["bid"])
      .then((status) => res.send(status))
  );
  app.post("/home/", (req, res) =>
    homeService.addNewHome(req.body).then((newHome) => res.json(newHome))
  );
  app.put("/home/:bid", (req, res) =>
    homeService
      .updateHome(req.params["bid"], req.body)
      .then((status) => res.send(status))
  );

  app.get("/services", (req, res) =>
    serviceService
      .findAllServices()
      .then((allServices) => res.json(allServices))
  );
  app.get("/Services/:bid", (req, res) =>
    serviceService
      .findServicesById(req.params["bid"])
      .then((Service) => res.json(Service))
  );
  app.delete("/Services/:bid", (req, res) =>
    serviceService
      .deleteServiceById(req.params["bid"])
      .then((status) => res.send(status))
  );
  app.post("/Services/", (req, res) =>
    serviceService
      .addNewService(req.body)
      .then((newService) => res.json(newService))
  );
  app.put("/Services/:bid", (req, res) =>
    serviceService
      .updateService(req.params["bid"], req.body)
      .then((status) => res.send(status))
  );

  app.get("/ourClients", (req, res) =>
    ourClientService
      .findAllOurClients()
      .then((allOurClients) => res.json(allOurClients))
  );
  app.get("/OurClients/:bid", (req, res) =>
    ourClientService
      .findOurClientsById(req.params["bid"])
      .then((OurClient) => res.json(OurClient))
  );
  app.delete("/OurClients/:bid", (req, res) =>
    ourClientService
      .deleteOurClientById(req.params["bid"])
      .then((status) => res.send(status))
  );
  app.post("/OurClients/", (req, res) =>
    ourClientService
      .addNewOurClient(req.body)
      .then((newOurClient) => res.json(newOurClient))
  );
  app.put("/OurClients/:bid", (req, res) =>
    ourClientService
      .updateOurClient(req.params["bid"], req.body)
      .then((status) => res.send(status))
  );

  app.get("/footer", (req, res) =>
    footerService.findAllFooters().then((allFooters) => res.json(allFooters))
  );
  app.get("/footer/:bid", (req, res) =>
    footerService
      .findFootersById(req.params["bid"])
      .then((Footer) => res.json(Footer))
  );
  app.delete("/footer/:bid", (req, res) =>
    footerService
      .deleteFooterById(req.params["bid"])
      .then((status) => res.send(status))
  );
  app.post("/footer/", (req, res) =>
    footerService
      .addNewFooter(req.body)
      .then((newFooter) => res.json(newFooter))
  );
  app.put("/footer/:bid", (req, res) =>
    footerService
      .updateFooter(req.params["bid"], req.body)
      .then((status) => res.send(status))
  );

  app.get("/about", (req, res) =>
    aboutService.findAllAbouts().then((allAbouts) => res.json(allAbouts))
  );
  app.get("/about/:bid", (req, res) =>
    aboutService
      .findAboutsById(req.params["bid"])
      .then((About) => res.json(About))
  );
  app.delete("/about/:bid", (req, res) =>
    aboutService
      .deleteAboutById(req.params["bid"])
      .then((status) => res.send(status))
  );
  app.post("/about/", (req, res) =>
    aboutService.addNewAbout(req.body).then((newAbout) => res.json(newAbout))
  );
  app.put("/about/:bid", (req, res) =>
    aboutService
      .updateAbout(req.params["bid"], req.body)
      .then((status) => res.send(status))
  );
};
