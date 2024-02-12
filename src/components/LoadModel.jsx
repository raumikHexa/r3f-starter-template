import { useGLTF } from "@react-three/drei";
export function LoadRoom({ path }) {
    const { scene } = useGLTF(path);
    return (
        <primitive object={scene} />
    )
}