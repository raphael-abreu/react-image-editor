import React, { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PANOLENS = require("panolens");
console.log(PANOLENS);
const src= `${process.env.PUBLIC_URL}/assets/pano3.jpg`;

const panorama = new PANOLENS.ImagePanorama(src);
console.log(panorama);






const Pano = () => {

  useEffect(() => {
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#coucou"),
    });
    console.log(viewer);
    viewer.add(panorama);
  }, []); // <-- empty array means 'run once'
  
  return (
    <>
      <p>Coucou</p>
      <div id="coucou" style={{height:1000}}>
        {}
      </div>
    </>
  );
};

export default Pano;
