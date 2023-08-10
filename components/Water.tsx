import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Water = ({ size, level }) => {
  const waterRef = useRef(null)
  useEffect(() => {
    // let vertices = [0, 0, 0, 100, 0, 0, 100, 0, 100, 0, 0, 100, 100, 0, 100]

    let vertices  = [
      new THREE.Vector3(0 - size / 2, level, 0 - size / 2),
      new THREE.Vector3(size - size / 2, level, size - size / 2),
      new THREE.Vector3(size - size / 2, level, 0 - size / 2),
      new THREE.Vector3(0 - size / 2, level, size - size / 2),
      new THREE.Vector3(size - size / 2, level, size - size / 2),
      new THREE.Vector3(0 - size / 2, level, 0 - size / 2),
    ]

    waterRef.current!.geometry.setFromPoints(vertices)
    console.log(waterRef.current)
  }, [size, level])


  return (
    <mesh ref={waterRef}>
      <bufferGeometry attach={"geometry"} />
      <meshStandardMaterial attach={"material"} color={[0.062, 0.561, 0.818]} />
    </mesh>
  )
}

export default Water