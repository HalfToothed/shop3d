/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useGLTF, useTexture } from '@react-three/drei';

const Shirt = () => {

  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const tShirtMesh = nodes.T_Shirt_male as THREE.Mesh;

  return (
    <group>
      <mesh
      castShadow
      geometry={tShirtMesh.geometry}
      material={materials.lambert1}
      material-roughness={1}
      dispose={null}
      >

      </mesh>
    </group>
  )
}

export default Shirt