import React, { useState } from "react";
import { useLocation } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export default function Register(props) {
  const location = useLocation();
  const getName = localStorage.getItem("name");
  const getImage = localStorage.getItem("img");
  const getRuntime = localStorage.getItem("runtime");
  const [show, setShow] = useState();
  const showtime = (e) => {
    setShow(e.target.value);
  };
  const [seat, setSeat] = useState(0);
  const bookSeat = (e) => {
    setSeat(e.target.value);
  };
  const [price, setPrice] = useState(0);
  const changePrice = (e) => {
    setPrice(e.target.value * 150);
  };
  const showModal = () => {
    MySwal.fire({
      title: "Confirm with your selection?",
      html: `<p>Movie name : ${getName}</p>
              <p> Ticket price : ${price} </p>
              <p> Showtime : ${show}</p>
              <p> Seats : ${seat}</p>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Booked!",
          text: "Your tickets has been booked.",
          icon: "success",
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = "/";
          } else {
            window.location = "/";
          }
        });
      }
    });
  };

  return (
    <div className="container">
      <div>
        <img src={getImage} className="big-poster" />
      </div>
      <div className="m-details">
        <h1 className="m-name">{getName}</h1>
        <p className="genre mb-s ft-size">{getRuntime} mins</p>
        <h2 className="mb-20">Select Showtime</h2>
        <div className="form">
          <form>
            <div className="mb-20">
              <div className="radio">
                <input
                  type="radio"
                  name="slot"
                  value="9:30 AM"
                  id="1"
                  required
                  onChange={showtime}
                />
                <label className="pd-2">9:30 AM</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="slot"
                  value="11:30 AM"
                  id="2"
                  onChange={showtime}
                />
                <label className="pd-2">11:30 AM</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="slot"
                  value="1:30 PM"
                  id="3"
                  onChange={showtime}
                />
                <label className="pd-2">1:30 PM</label>
              </div>
            </div>
            <h2 className="mb-20">Select Seats</h2>
            <select
              name="seats"
              id="seats"
              className="select"
              required
              onChange={changePrice}
              onClick={bookSeat}>
              <option disabled selected value="">
                --- SELECT ---
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <h2 className="mt-20">
              Ticket Price - <span className="price">₹{price}</span>
            </h2>
            <button
              type="button"
              className="btn btn-book-clr"
              onClick={() => showModal()}>
              Book Tickets
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
