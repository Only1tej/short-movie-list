export const Genres = ({ values }) => {
  // console.log("inside values of genre: ", values);
  return (
    <div>
      {values.map((genre, idx) => {
        return (
          <div key={idx} className="badge">
            {genre}
          </div>
        );
      })}
    </div>
  );
};
