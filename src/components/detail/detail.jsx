import "./detail.css"

 export const Detail = (props) => {
  const {reservID, dates, guests, diet, roomTotal, checkIn, checkOut} = props
    return (
        <>
        <div className="summary__detail">
            <h3>Detail rezervace</h3>

                <div className="summary__number">Číslo: {reservID}</div>
                <div className="summary__dates">Pobyt: {dates}</div>
                <div className="summary__guests">Hosté: {guests}</div>
                <div className="summary__diet">Stravovávní: {diet}</div>
                <div className="summary__room-total">Cena: {roomTotal}</div>
                <div className="summary__check-in">Check-in: {checkIn}</div>
                <div className="summary__check-out">Check-out: {checkOut}</div>
        </div>
      </>

    )
}

const reservID = "459787-745"
const dates = "13.6.2023 - 17.6.2026"
const guests = "2 dospělí, 1 dítě"
const diet = "žádné"
const roomTotal = "7 200 Kč"
const checkIn = "13.6.2023 do 18:00"
const checkOut = "17.6.2026 do 10:00"
