import { Chair } from "./Chair";

export const ChairList = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((hangGhe) => {
        return (
          <div
            className="d-flex justify-content-center gap-3 mt-3"
            key={hangGhe.hang}
          >
            <div className="chairRow"
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
              }}
            >
              {hangGhe.hang}
            </div>
            <div className="d-flex gap-3">
              {hangGhe.danhSachGhe.map((ghe) => {
                return <Chair ghe={ghe} key={ghe.soGhe} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
