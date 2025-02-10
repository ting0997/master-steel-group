import Directory from "./components/directory/directory.component"


const App=()=> {
  const categories=[
    {
      id:1,
      title:"Fencing",
      imageUrl: "https://i.ibb.co/qYbjh6bL/IMG-6146-2.jpg"
    },
    {
      id:2,
      title:"Hand Rails",
      imageUrl: "https://i.ibb.co/67VyVmSK/handrail.jpg"
    },
    {
      id:3,
      title:"Metal Balustrades",
      imageUrl: "https://i.ibb.co/XfhxBW6y/balustrade.png"
    },
    {
      id:4,
      title:"Glass Balustrades",
      imageUrl: "https://i.ibb.co/9Hxd0TgN/glass-balustrade.png"
    },
    {
      id:5,
      title:"Custom Stairs",
      imageUrl: "https://i.ibb.co/Zpfx2MxV/stair.jpg"
    },
    {
      id:6,
      title:"Privacy Screen",
      imageUrl: "https://i.ibb.co/gFQS4LbC/privacy-screen.jpg"
    },
    {
      id:7,
      title:"Awning & Pergola",
      imageUrl: "https://i.ibb.co/Cp4VHchM/Awning.jpg"
    },
    {
      id:8,
      title:"Swing & Sliding Gates",
      imageUrl: "https://i.ibb.co/ymcVn9Pd/swing-gate.jpg"
    }

  ]
  return (
    <Directory categories={categories}/>
  )
}
     
     
   
  


export default App;
