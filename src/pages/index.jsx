import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { BookingSummary } from '../components/bookingsummary/bookingsummary';
import { Detail } from '../components/detail/detail';
import { Sluzby } from '../components/doplnsluzby/doplnsluzby';
import { Storno } from '../components/storno/storno'; 
import { Hlavicka } from '../components/hlavicka/hlavicka';


const rating = 4.65
const roomPrice = "1 800 Kč / noc"

const reservID = "459787-745"
const dates = "13.8.2024 - 17.8.2024"
const guests = "2 dospělí, 1 dítě"
const diet = "žádné"
const roomTotal = "7 200 Kč"
const checkIn = "13.8.2024 do 18:00"
const checkOut = "17.8.2024 do 10:00"

const parking = "200 Kč / noc"
const breakfast = "150 Kč / noc"
const wellness = "Zdarma"
const wifi = "Zdarma na všech pokojích"

const cancelCharge = "Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu."


document.querySelector('#root').innerHTML = render(
  <div className="container">
      <>
        <BookingSummary />
        <Hlavicka rating={rating}
                roomPrice={roomPrice}
        />  

        <Detail reservID={reservID}
                dates={dates}
                guests={guests}
                diet={diet}
                roomTotal={roomTotal}
                checkIn={checkIn}
                checkOut={checkOut}
        />

        <Sluzby parking={parking}
                breakfast={breakfast}
                wellness={wellness}
                wifi={wifi}
        />

        <Storno cancelCharge={cancelCharge} />
    
      </>
  </div>
);
