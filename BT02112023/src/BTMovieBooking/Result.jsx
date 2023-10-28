import {useDispatch, useSelector} from 'react-redux'
import { btMovieBookingActions } from '../Store/BTMovieBooking/slice';



export const Result = () => {
  const dispatch = useDispatch()
  const {chairBooking} = useSelector(state => state.btMovieBooking)
  return (
    <div>
      <h2>Kết quả đặt vé</h2>
      <div>
        <div className="d-flex gap-3 mt-3">
          <div className="chair booked disabled"></div>
          <span>Ghế đã đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="chair booking disabled"></div>
          <span>Ghế đang đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="chair disabled"></div>
          <span>Ghế chưa đặt</span>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {
            chairBooking && chairBooking.map((ghe, index) => {
              return(
                <tr>
                  <td>{ghe.soGhe}</td>
                  <td>{ghe.gia}</td>
                  <td className='text-danger deleteGhe' onClick={() => {
                    dispatch(btMovieBookingActions.deleteChairBooking(ghe.soGhe))
                  }}>X</td>
                </tr>
              )
            })
          }
          <tr>
            <td>Tổng:</td>
            <td>
              {
                chairBooking.reduce((total, value) =>{
                  return (total += value.gia)
                },0)
              }
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => {
        dispatch(btMovieBookingActions.setChairBooked())
      }}>Thanh Toán</button>
    </div>
  );
};
