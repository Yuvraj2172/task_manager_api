const notFound = (req, res) => {
  res.status(404).send({ message: "Route Not Found" });
};

module.exports = notFound;
