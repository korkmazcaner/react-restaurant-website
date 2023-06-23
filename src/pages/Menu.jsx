import { menuList } from "../utils/constants";

function Menu() {
  return (
    <div className="menu d-flex gap-3 flex-wrap p-5 justify-content-center">
      {menuList.map((food) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={food.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{food.name}</h5>
              <p className="card-text">{food.price}$</p>
              <div className="text-end">
                <a href="#" className="btn btn-danger ">
                  Sipariş Ver!
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
