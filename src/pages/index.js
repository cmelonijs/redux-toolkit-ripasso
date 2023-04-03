import { useSelector, useDispatch } from "react-redux";
import { addDate } from '../datesSlice';
import { store } from '../store';

export default function Home() {
  const dates = useSelector((state) => state.dates.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addDate())
  }

  return (
    <>
      <button onClick={handleClick}>Cattura il momento</button>
      {dates.forEach((date) => (
        <h1>{date}</h1>
      ))}
    </>
  )
}
