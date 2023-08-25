const Button = ({ name }) => {
  return (
    <div className="">
      <button className="mx-1 my-1 py-1 px-3 border border-b-1 rounded-lg bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
