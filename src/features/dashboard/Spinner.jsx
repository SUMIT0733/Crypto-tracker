// function Spinner() {
//   return (
//     <div className="aspect-w-1 aspect-h-1 from-brand-600 m-12 mx-auto w-16 animate-spin rounded-full bg-gradient-to-br to-transparent">
//       {/* You may need to add additional elements or styles to mimic the radial gradient and mask */}
//     </div>
//   );
// }

// export default Spinner;

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #48d1cc 94%, #48d1cc) top/10px 10px no-repeat,
    conic-gradient(#f00 30%, #00f);
  -webkit-mask: radial-gradient(farthest-side, #0f0 calc(100% - 10px), #ff0 0);
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
