const Pet = (props) => {
  return (
    <div>
      <h1>{props.animal}</h1>
      <h2>{props.breed}</h2>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Pet;
