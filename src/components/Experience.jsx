import { Environment, OrbitControls } from "@react-three/drei";
import { LoadRoom } from "./LoadModel";

export const Experience = () => {
  return (
    <>
    <Environment preset="city" background={false}/>
    {/* <LoadRoom path={"/pathToModel"}/> */}
    <OrbitControls/>
    </>
  );
};
