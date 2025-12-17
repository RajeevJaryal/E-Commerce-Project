const HeaderSection = ({ onOpenCart }) => {
  return (
    <div className="bg-dark text-white">
      <div
        className="d-flex align-items-center position-relative"
        style={{ height: "70px" }}
      >
        
        <div className="d-flex gap-3 position-absolute start-50 translate-middle-x">
          <h5 className="mb-0">Home</h5>
          <h5 className="mb-0">Store</h5>
          <h5 className="mb-0">About</h5>
        </div>

        <div className="ms-auto me-3">
          <button className="btn btn-outline-light" onClick={onOpenCart}>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
