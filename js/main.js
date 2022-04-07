// const pointersContainer = document.querySelector("#pointers-container");
// const elmnt = document.getElementById("myDIV");
// const mapWidth = elmnt.offsetWidth;
// const mapHeight = elmnt.offsetHeight;
// // const mapWidth = 1202;
// // const mapHeight = 927.26;
//
// [
//   // vn
//   { lat: 21.0294498, lon: 105.8544441 },
//   // tokyo
//   { lat: 35.652832, lon: 139.839478 },
//   // london
//   { lat: 51.509865, lon: -0.118092 },
// ].forEach(({ lat, lon }) => {
//   const radius = mapWidth / (2 * Math.PI);
//   const FE = 180;
//
//   const lonRad = ((lon + FE) * Math.PI) / 180;
//   const x = lonRad * radius;
//   const latRad = (lat * Math.PI) / 180;
//
//   const verticalOffsetFromEquator = radius * Math.log(Math.tan(Math.PI / 4 + latRad / 2));
//   const y = mapHeight / 2 - verticalOffsetFromEquator;
//
//   const pointer = document.createElement("span");
//   pointer.classList.add("pointer");
//   pointer.style.left = `${x - 15/2 - (15/2 * 0.5)}px`;
//   pointer.style.top = `${y - 15/2 - (15/2 * 0.5)}px`;
//   pointersContainer.appendChild(pointer);
// });