import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [300, 300, 300], fov: 75, far: 5000 }}>
      <color attach="background" args={["grey"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
