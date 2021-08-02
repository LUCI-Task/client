import React from "react";
import "./styles.css";

export default function Loader() {
  return (
    <div className="body">
      <div className="things">
        <div className="thing">
          <div className="thing">
            <div className="thing">
              <div className="thing">
                <div className="thing">
                  <div className="thing">
                    <div className="thing">
                      <div className="thing">
                        <div className="thing">
                          <div className="thing"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const styles = {
//     * {
//     margin: 0;
//     padding: 0;
//     boxSizing: borderBox;
// // }
// .body {
//     min-height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden;
// }
// .thing {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 1px;
//     border: 10px solid transparent;
//     border-color: tomato transparent transparent tomato;
//     border-radius: 50%;
//     animation: thing 5s cubic-bezier(0.35, -0.14, 0.79, 1.22) infinite;
// }
// @keyframes thing {
//     100% {
//         transform: rotateZ(1turn);
//    }
// }
