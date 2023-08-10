'use client'

import { OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { color, vec2 } from 'three/examples/jsm/nodes/Nodes.js'
import { createNoise2D } from 'simplex-noise'

const Cube = (props: any) => {
  


  
  const geomRef = useRef(null)
  const [treeArray, setTreeArray] = useState()

  setInterval(() => {
    genClouds()
  }, 8000)


  const genClouds = () => {

  }

  const drawVertices = () => {
    const size = props.dimension 
    const heights = props.array
    const roadNoise = createNoise2D()


    
    
    let vertices = []

    let tempArr = []

    let treeArr = []

    let roadArr = []
    for (let q = 0; q < 8; q++) {
      let startSide = Math.floor(Math.random() * 10) / 5
      

      if (startSide == 1) {
        roadArr.push({x: (Math.floor(Math.random() * size) + 1), z: 0})
      } else {
        roadArr.push({x: 0, z: (Math.floor(Math.random() * size) + 1)})
      }

      let currentPos = roadArr[0]
      let count = 1
      while (!(count != 1 && currentPos.x == 0 && currentPos.z == 0) && currentPos.x != size && currentPos.z != size) {
        let direction = Math.floor(Math.random() * 3) + 1
        let regen = false
        while (!regen) {
          for (let x = 0; x < roadArr.length; x++) {
            if (roadArr[x].x == currentPos.x - 1 && roadArr[x].z == currentPos.z && direction == 1) {
              direction = Math.floor(Math.random() * 3) + 1
            }
            if (roadArr[x].x == currentPos.x + 1 && roadArr[x].z == currentPos.z && direction == 2) {
              direction = Math.floor(Math.random() * 3) + 1
            }
            else if (roadArr[x].x == currentPos.x && roadArr[x].z == currentPos.z + 1 && direction == 3) {
              direction = Math.floor(Math.random() * 3) + 1
            } 
            else {
              regen = true
            }
          }
        }
        if (direction == 1 && currentPos.x != 0) {
          roadArr.push({...currentPos, x: currentPos.x - 1})
        } else if (direction == 2) {
          roadArr.push({...currentPos, x: currentPos.x + 1})
        } else {
          roadArr.push({...currentPos, z: currentPos.z + 1})
        }
        currentPos = roadArr[count]
        count++
      }
    }
    // for (let h = 0; h < roadArr.length; h++) {
    //   heights[roadArr[h].x][roadArr[h].z] = heights[roadArr[h].x][roadArr[h].z] - 4
    // }
    

    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - 1; j++) {
        let x = i
        let z = j




  

        let ifTree = Math.floor(Math.random() * 20) == 1 ? true : false


        
        let x00 = new THREE.Vector3(x - size / 2, heights[x][z], z - size / 2)
        let x01 = new THREE.Vector3(x - size / 2 + 1, heights[x + 1][z], z - size / 2)
        let x11 = new THREE.Vector3(x - size / 2 + 1, heights[x + 1][z + 1], z - size / 2 + 1)
        
        let y00 = new THREE.Vector3(x - size / 2, heights[x][z], z - size / 2) 
        let y10 = new THREE.Vector3(x - size / 2, heights[x][z + 1], z - size / 2 + 1)
        let y11 = new THREE.Vector3(x - size / 2 + 1, heights[x + 1][z + 1], z - size / 2 + 1)

        let currentCoords = {x: i, z: j}
        

        
        
        
        

        vertices.push(x00, x11, x01, y00, y10, y11)
        
        let col1 = heights[x][z] > -3 ? heights[x][z] > 0 ? heights[x][z] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col2 = heights[x + 1][z] > -3 ? heights[x + 1][z] > 0 ? heights[x + 1][z] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col3 = heights[x + 1][z + 1] > -3 ? heights[x + 1][z + 1] > 0 ? heights[x + 1][z + 1] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col4 = heights[x][z] > -3 ? heights[x][z] > 0 ? heights[x][z] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col5 = heights[x][z + 1] > -3 ? heights[x][z + 1] > 0 ? heights[x][z + 1] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col6 = heights[x + 1][z + 1] > -3 ? heights[x + 1][z + 1] > 0 ? heights[x + 1][z + 1] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        for (let b = 0; b < roadArr.length; b++) {
          if (roadArr[b].x == x && roadArr[b].z == z) {
            col1 = [0.3, 0.25, 0.2]
            col2 = [0.3, 0.25, 0.2]
            col3 = [0.3, 0.25, 0.2]
            col4 = [0.3, 0.25, 0.2]
            col5 = [0.3, 0.25, 0.2]
            col6 = [0.3, 0.25, 0.2]
          }
        }

        if (ifTree && col1[0] == 0.4 && x > 0 && z > 0) {
          if (!treeArr.includes({ x: x - 1, y: heights[x - 1][z - 1], z: z - 1 }) && !treeArr.includes({ x: x, y: heights[x][z - 1], z: z - 1 }) && !treeArr.includes({ x: x - 1, y: heights[x - 1][z], z: z })) {
            treeArr.push({x: x - size / 2, y: heights[x][z], z: z - size / 2})
          }
        }
        
        tempArr.push(...col1, ...col2, ...col3, ...col4, ...col5, ...col6)
        // tempArr.push(0.0, 0.0, 0.0,0.0, 0.0, 0.0,0.0, 0.0, 0.0,0.0, 0.0, 0.0,0.0, 0.0, 0.0,0.0, 0.0, 0.0 )
      }
    }
    setTreeArray(treeArr)

    // let count = geomRef.current.geometry.attributes.position.count

    // geomRef.current.geometry.setAttribute(
    //   "color",
    //   new THREE.BufferAttribute(new Float32Array((count || 0) * 3), 3, true)
    // );
    
    // for (let z = 0; z < count; z++) {
    //   geomRef.current?.geometry.attributes.color.setXYZ(z, 0.3, 0.3, 0.6);
    // }
    


    let colorArr = new Float32Array(tempArr)
    
    return {verticesArr: vertices, colorAr: colorArr}
  }
  useEffect(() => {
    props.isLoaded(false)
    geomRef.current!.geometry.setFromPoints(drawVertices().verticesArr)

    let count = geomRef.current.geometry.attributes.position.count

    geomRef.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(drawVertices().colorAr, 3, true)
    );
    
    // for (let z = 0; z < count; z++) {
    //   geomRef.current?.geometry.attributes.color.setXYZ(z, 0.3, 0.3, 0.6);
    // }
    


    // geomRef.current!.geometry.setAttribute('color', new THREE.BufferAttribute(drawVertices().colorAr, 3))
    geomRef.current!.geometry.attributes.color.needsUpdate = true;
    geomRef.current!.geometry.computeVertexNormals();
    props.isLoaded(true)
  }, [JSON.stringify(props)])

  return (
    <>
      
      <mesh ref={geomRef}>
        <bufferGeometry attach="geometry" />
        {/* <meshStandardMaterial color={props.height > -0.3 ? props.height > 1.8 ? props.height > 3.8 ? "lime" : "green" : "brown" : "gray"} /> */}
        <meshStandardMaterial vertexColors={true} />
      </mesh>
      {
        treeArray ? (
          treeArray.map((tree: object) => (
            <group position={[tree.x, tree.y + 2, tree.z]}>
              <mesh>
                <sphereGeometry attach={"geometry"} />
                <meshStandardMaterial attach={"material"} color={"green"} />
              </mesh>
              <mesh position={[0, -2, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 2.4]} attach={"geometry"} />
                <meshStandardMaterial attach={"material"} color={[0.188, 0.168, 0.058]} />
              </mesh>
            </group>
          ))
        ) : null
      }
      {/* <mesh>
        <sphereGeometry />
      </mesh> */}
      {/* <mesh>
        <boxGeometry />
      </mesh> */}
    </>
  )
}

export default Cube