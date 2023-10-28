
import { btMovieBookingActions } from '../Store/BTMovieBooking/slice'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'


export const Chair = ({ghe}) => {
  
    const {chairBooking, chairBooked} = useSelector(state => state.btMovieBooking)
    const dispatch = useDispatch()
    console.log(chairBooking)
  return (
    <div className={cn("chair", {
      "booking": chairBooking.find(e => e.soGhe === ghe.soGhe),
      "booked" : chairBooked.find(e => e.soGhe === ghe.soGhe),
      "disabled" : ghe.gia === 0
    })} onClick={() => {
        dispatch(btMovieBookingActions.setChairBooking(ghe))
    }}>
        {ghe.soGhe}
    </div>
  )
}
