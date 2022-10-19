import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


function Header() {
  return (
    <div className={styles.header}>
      <img src={"./logo.png"} className={styles.logo} />


      <div className={styles.login}>
        <Link href={'/Login'}><button className={styles.button_login}>Exposição</button></Link>
      </div>
      <div className={styles.login}>
        <Link href={'/Singup'}><button className={styles.button_singup}>SignUp</button></Link>

      </div>
      <div className={styles.login}>
        <Link href={'/Perfil'}><button className={styles.button_perfil}>Perfil</button></Link>
      </div>

    </div>
  )
}

export default function Home() {

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.leafie}><h1>LEAFIE</h1></div>
      <div className={styles.selection}><h2>Acerca da exposição</h2></div>
      <div className={styles.body}>

      </div>

      <div className={styles.body}>
        <div className={styles.squares}>



        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>

      </div>
      <div className={styles.body}>
      </div>
      <div className={styles.body}>
        <div className={styles.squares}>
          {/* <BunkerCard /> */}
        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>

      </div>
      <div className={styles.body}>


      </div>
    </div >


  )
}

/*

const bunkers = [
  {
    imagePath: "/Bunker1/1a.jpg",
    name: "VIVOS EUROPA ONE",
    price: "2.2 M",
    location: {
      city: "Nantes",
      country: "France"
    },
    tags: ["biochemical", "cyber"]
  }
]
function BunkerCard({ data }) {
  let path = ""
  let bunker = ""
  if(data.imagePath == "/Bunker1/1a.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker"
  }
  else if(data.imagePath == "/Bunker2/3a.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker1"
  }
  if(data.imagePath == "/Bunker3/4A.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker2"
  }
  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.BunkerImage}>
          <Link href={bunker}><img src={data.imagePath} /></Link>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.Dados}>
          <div className={styles.Nomes}>{data.name}</div>
          <div className={styles.Preços}>{data.location.city}, {data.location.country}</div>
          <div className={styles.Local}>{data.price} €</div>
        </div>
        <div className={styles.tags}>
          {data.tags.map(t => <img src={`/Icones_Catastrofes/${t}.png`}></img>)}
        </div>
      </div>
    </div>

  )
}
*/