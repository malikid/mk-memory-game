const index = (req, res) => res.send('Hello World from example controller index, which is the default entry point!');
const example = (req, res) => {
  console.log("Hello World from example controller example!");
  Example.aaa(req, res);
};

export {index, example};
