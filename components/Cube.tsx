'use client'

import { OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { color, vec2 } from 'three/examples/jsm/nodes/Nodes.js'
import { createNoise2D } from 'simplex-noise'

const Cube = (props: any) => {
  


  
  const geomRef = useRef(null)
  const [treeArray, setTreeArray] = useState()

  
  
  
  // upcoming feature......
  // setInterval(() => {
  //   genClouds()
  // }, 8000)


  // const genClouds = () => {

  // }

  type Droplet = {
    x: number,
    y: number,
    z: number,
    momentum: number,
    soilContent: number,
    reachedBottom: boolean,
  }
  type DeltaHeight = {
    value: number,
    lowestDrop: Droplet | object,
    pastDirection: any,
  }
 
  const drawVertices = () => {
    const size = props.dimension 
    let heights = props.array
    const roadNoise = createNoise2D()


    
    
    let vertices = []

    let tempArr = []

    let treeArr = []

    let dropletPath: Droplet[] = []
    const genDroplet = () => {
      const heights = props.array
      const size = props.dimension 
  
      let droplet: Droplet = {x: Math.floor(Math.random() * size), y: 0, z: Math.floor(Math.random() * size), momentum: 0,  soilContent: 0, reachedBottom: false}
      droplet.y = heights[droplet.x][droplet.z]
  
      dropletPath.push(droplet)
      let deltaHeight: DeltaHeight = {value: 0, lowestDrop: {}, pastDirection: {}}
      let stopped = false

      
      
      dropLetCheck:while (!stopped && droplet.x > 0 && droplet.z > 0 && droplet.x < size - 1 && droplet.z < size - 1) {
        deltaHeight = {...deltaHeight, value: 0, lowestDrop: {}}


        let notStuck = false
        const doHeightChecks = () => {
          for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
              applyDropletChange(i, j)
              if (deltaHeight.value > 0.8 && droplet.momentum < 3) {
                droplet.momentum = droplet.momentum + 1
              }
            }
          }
        }
        const applyDropletChange = (x: number, z: number) => {
          let tempDeltaHeight = droplet.y - heights[droplet.x + x][droplet.z + z]
          if (tempDeltaHeight > deltaHeight.value) {
            notStuck = true
            deltaHeight.value = tempDeltaHeight
            deltaHeight.lowestDrop = {...droplet, x: droplet.x + x, y: heights[droplet.x + x][droplet.z + z], z: droplet.z + z}
            deltaHeight.pastDirection = () => {
              return {x: droplet.x + x, y: heights[droplet.x + x][droplet.z + z], z: droplet.z + z}
            }
          }

        }
        doHeightChecks()
        droplet = {...droplet, ...deltaHeight.lowestDrop, momentum: droplet.momentum}
        // console.log(droplet)
        const addSurrounds = (isMoving: boolean) => {
          for (let x0 = -1; x0 < 2; x0++) {
            for (let z0 = -1; z0 < 2; z0++) {

              // heights[droplet.x + x0][droplet.z + z0] += droplet.soilContent / 300 / (isMoving ? droplet.momentum : 1)
              // heights[droplet.x + x0][droplet.z + z0] += droplet.soilContent / (isMoving ? droplet.momentum : 1)

              heights[droplet.x + x0][droplet.z + z0] += 0.4 / (isMoving ? droplet.momentum : 1)
            }
          }

          // heights[droplet.x][droplet.z] += 1
        }
        if (!notStuck) {
          while (droplet.momentum > 0 && droplet.x > 0 && droplet.z > 0 && droplet.x < size - 2 && droplet.z < size - 2) {
            droplet = {...droplet, ...deltaHeight.pastDirection()}
            
            
            addSurrounds(true)
            
            droplet.momentum -= 1
            dropletPath.push(droplet)
            
            doHeightChecks() 
            let doContinue = true
            for (let i = 0; i < dropletPath.length; i++) {
              if (dropletPath[i].x == deltaHeight.lowestDrop.x && dropletPath[i].z == deltaHeight.lowestDrop.z) {
                doContinue = false
                stopped = true
                droplet.reachedBottom = true
              }
            }
            if (deltaHeight.value > 0 && doContinue) {
              continue dropLetCheck
            }
          }
          if (droplet.momentum == 0) {
            addSurrounds(false)
            stopped = true
            droplet.reachedBottom = true
          }
        } else {
          let soilAmount = deltaHeight.value - (deltaHeight.value / 10) * 0.6

          droplet.soilContent += soilAmount
          // let currentHeight = heights[droplet.x][droplet.z]
          // console.log(currentHeight)
          // heights[droplet.x][droplet.z] = currentHeight - soilAmount
          // console.log(heights[droplet.x][droplet.z])
          // heights[droplet.x][droplet.z] -= 1
          // console.log(heights[droplet.x][droplet.z], "////", droplet.soilContent)
          
          dropletPath.push(droplet)
          
        }
        
      }      
    }

    for (let droplets = 0; droplets < 1; droplets++) {
      genDroplet()

    }


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

        
        
        let col1 = heights[x][z] > -3 ? heights[x][z] > 0 ? heights[x][z] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col2 = heights[x + 1][z] > -3 ? heights[x + 1][z] > 0 ? heights[x + 1][z] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col3 = heights[x + 1][z + 1] > -3 ? heights[x + 1][z + 1] > 0 ? heights[x + 1][z + 1] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col4 = heights[x][z] > -3 ? heights[x][z] > 0 ? heights[x][z] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col5 = heights[x][z + 1] > -3 ? heights[x][z + 1] > 0 ? heights[x][z + 1] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        let col6 = heights[x + 1][z + 1] > -3 ? heights[x + 1][z + 1] > 0 ? heights[x + 1][z + 1] > 5 ? [0.8, 0.8, 0.8] : [0.5, 0.5, 0.5] : [0.4, 0.6, 0.2] : [0.5, 0.45, 0.4] 
        for (let b = 0; b < dropletPath.length; b++) {
          if (dropletPath[b].x == x && dropletPath[b].z == z) {
            col1 = [0.3, 0.25, 0.2]
            col2 = [0.3, 0.25, 0.2]
            col3 = [0.3, 0.25, 0.2]
            col4 = [0.3, 0.25, 0.2]
            col5 = [0.3, 0.25, 0.2]
            col6 = [0.3, 0.25, 0.2]
          }
        }
          
          
          
          





          vertices.push(x00, x11, x01, y00, y10, y11)

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
    // console.log(vertices)
    return {verticesArr: vertices, colorAr: colorArr}
  }

  // const genDroplet = () => {
  //   let dropletPath = []
  //   const heights = props.array
  //   const size = props.dimension 

  //   let droplet = {x: Math.floor(Math.random() * size), y: 0, z: Math.floor(Math.random() * size)}
  //   droplet.y = heights[droplet.x][droplet.z]

  //   dropletPath.push(droplet)

  //   while (droplet.y > - 4) {
  //     if (heights[droplet.x + 1][droplet.z] < droplet.y) {
  //       droplet = {x: droplet.x + 1, y: heights[droplet.x + 1][droplet.z], z: droplet.z}
  //     } else if (heights[droplet.x][droplet.z + 1] < droplet.y) {
  //       droplet = {x: droplet.x, y: heights[droplet.x][droplet.z + 1], z: droplet.z + 1}
  //     } else if (heights[droplet.x + 1][droplet.z + 1] < droplet.y) {
  //       droplet = {x: droplet.x + 1, y: heights[droplet.x + 1][droplet.z + 1], z: droplet.z + 1}
  //     } else if (heights[droplet.x - 1][droplet.z] < droplet.y) {
  //       droplet = {x: droplet.x - 1, y: heights[droplet.x - 1][droplet.z], z: droplet.z}
  //     } else if (heights[droplet.x][droplet.z - 1] < droplet.y) {
  //       droplet = {x: droplet.x, y: heights[droplet.x][droplet.z - 1], z: droplet.z - 1}
  //     } else if (heights[droplet.x - 1][droplet.z - 1] < droplet.y) {
  //       droplet = {x: droplet.x - 1, y: heights[droplet.x - 1][droplet.z - 1], z: droplet.z - 1}
  //     } else {
  //       dropletPath.push(droplet)
  //       break;
  //     }
  //     dropletPath.push(droplet)
  //   }

    
  // }


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
  }, [JSON.stringify(props.regen)])

  return (
    <>
      
      <mesh ref={geomRef}>
        <bufferGeometry attach="geometry" />
        <meshStandardMaterial vertexColors={true} />
      </mesh>
      {
        treeArray ? (
          treeArray.map((tree: object, key) => (
            <group key={key} position={[tree.x, tree.y + 2, tree.z]}>
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