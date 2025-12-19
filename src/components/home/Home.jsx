import PlaySvg from "./Playsvg";

const tourDates = [
  { date: "JUL 16", city: "Detroit, MI", venue: "DTE Energy Music Theatre" },
  { date: "JUL 19", city: "Toronto, ON", venue: "Budweiser Stage" },
  { date: "JUL 22", city: "Bristow, VA", venue: "Jiggy Lube Live" },
  { date: "JUL 29", city: "Phoenix, AZ", venue: "AK-Chin Pavilion" },
  { date: "AUG 2", city: "Las Vegas, NV", venue: "T-Mobile Arena" },
  { date: "AUG 7", city: "Concord, CA", venue: "Concord Pavilion" },
];

const Home = () => {
  return (
    <>
      <div
        className="bg-secondary d-flex flex-column align-items-center gap-3"
        style={{ height: "150px" }}
      >
        <div
          className="d-flex align-items-center justify-content-center text-white fw-bold"
          style={{
            width: "300px",
            height: "50px",
            border: "2px solid skyblue",
          }}
        >
          Get our Latest Album
        </div>

        <PlaySvg />
      </div>
      <div className="d-flex flex-column align-items-center mt-4">
        <h2 className="mb-4">Tours</h2>

        <div className="w-75">
          {tourDates.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between border-bottom py-3"
            >
              <span className="fw-bold" style={{ width: "80px" }}>
                {item.date}
              </span>
              <span style={{ width: "200px", color: "#6c757d" }}>
                {item.city}
              </span>
              <span
                className="text-uppercase"
                style={{ flex: 1, color: "#6c757d" }}
              >
                {item.venue}
              </span>
              <button className="btn btn-info text-white px-4">
                BUY TICKETS
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-info p-4  p-5 ">
        <h2 className="fw-bold">The Generics</h2>
      </footer>
    </>
  );
};

export default Home;
