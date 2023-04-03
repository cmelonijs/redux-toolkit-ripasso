import { useSelector, useDispatch } from "react-redux";
import { addDate } from '../datesSlice';

export default function Home() {
  const dates = useSelector((state) => state.dates.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addDate())
  }
  
  return (
      <>
        <button onClick={handleClick}>Cattura il momento</button>
        {dates.map((date, idx) => {
          console.log('date.toISOString()', date.toISOString())
          return (
          <h1 key={idx}>{date.toISOString()}</h1>
        )})}
      </>
  )
}
