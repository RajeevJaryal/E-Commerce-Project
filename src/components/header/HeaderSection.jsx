const HeaderSection = ({ onOpenCart, totalItems }) => {
  return (
    <div
      className="bg-dark text-white position-fixed w-100"
      style={{ height: "70px", top: 0, zIndex: 1000 }}
    >
      <div className="container d-flex align-items-center justify-content-between h-100">
        <div className="d-flex justify-content-center flex-grow-1 gap-4">
          <h5 className="mb-0">Home</h5>
          <h5 className="mb-0">Store</h5>
          <h5 className="mb-0">About</h5>
        </div>

        <button className="btn btn-primary" onClick={onOpenCart}>
          Cart: {totalItems}
        </button>
      </div>
    </div>
  );
};
export default HeaderSection;
