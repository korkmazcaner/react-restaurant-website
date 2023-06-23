// Resmi değişikene atamanın en kolay yolu.
import BannerImage from "../assets/2blackbean.jpg";

function Iletisim() {
  return (
    <div className="contact d-flex">
      <div className="contact-left w-50"></div>
      <div className="contact-right p-5 w-50">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              İsim Soyisim
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              E-mail Adresiniz
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Mesajınız
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
export default Iletisim;
