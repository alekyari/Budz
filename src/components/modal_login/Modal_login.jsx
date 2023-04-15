import { useState } from "react";
import references from "@/utils/references"
import Image from "next/image";
import styles from "./index.module.scss";

const Modal_login = ({setModalIsVisibility, onHandleUsername, 
  onHandlePassword, userName, password}) => {

    const onHandleCloseClick = () =>{
      setModalIsVisibility(false)
    }

    const onHandleSubmit = (e) =>{
      e.preventDefault()
      if (
        userName === references.username &&
        password === references.password
      ) {
        setModalIsVisibility(false)
      }else{
        <div>
          <p>Username o password errati</p>
        </div>
      }  
    }
    

    return (
    <div className={styles.Modal_login}>
        <p className={styles.info1}>Iscriviti per ricevere brani e podcast illimitati. Non è necessaria alcuna carta di credito.
        </p>
      <div className={styles.containerLogin}>
        {/* <Image
          src={"/logo.png"}
          alt="logo.png"
          width={300}
          height={300}
          className={styles.logo}
        /> */}
        <h1>BUDZ</h1>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange={onHandleUsername}
            value={userName}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={onHandlePassword}
            value={password}
            required
          />
          <input onClick={onHandleCloseClick} 
          setModalIsVisibility={setModalIsVisibility} 
          type="submit" value="Login" 
          className={styles.inputLogin} />
        </form>
      </div>
        <p className={styles.info2}>Per saperne di più su come Budz raccoglie, utilizza, condivide e protegge
          i tuoi dati personali, leggi l{"'"}informativa sulla privacy di budz.
        </p>
    </div>
    )
  }


export default Modal_login







