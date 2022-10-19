import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const bunkers = [
  {
    name: "VIVOS EUROPA ONE",
    price: "2.2 M",
    location: {
      city: "Nantes",
      country: "France"
    },
    tags: ["biochemical", "cyber"]
  },
]

function Header() {
  return (
    <div className={styles.header}
      style={{ backgroundImage: "url(/header.jpg)" }}>
      <img src={"./logo.png"} className={styles.logo} />
      <div className="textoHeader"><h1>LOOKING TO<br/>
        SURVIVE IN STYLE?</h1>
      <h5>A.BUNKER is the best solutions to enjoy the end of days.</h5></div>


      

      <div className={styles.login}>
        <Link href={'/Login'}><button className={styles.button_login}>Login</button></Link>
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

      <div className={styles.selection}><h2>Our selection</h2></div>
      <div className={styles.body}>
        <BunkerCard data={bunkers[0]}></BunkerCard>
        <BunkerCard data={bunkers[1]}></BunkerCard>
        <BunkerCard data={bunkers[2]}></BunkerCard>

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
<div className={styles.searchBar}>
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
*/