import axios from 'axios'
import React, { useState } from 'react'
import { getText } from '../locales'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from "react-input-mask";

const Zayavka = () => {

    const [name, setName] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [load, setLoad] = useState(false)

    const sendMessage = (e) => {
        e.preventDefault()
        setLoad(true)
        axios.post("https://muhammadumar.uz/bot/api/", { name, phone_number })
            .then((res) => {
                // toast.success('Success');
                setName("")
                setPhone_number("")
                setTimeout(() => {
                    setLoad(false)
                }, 3000)
                notify()
            })
            .catch((err) => {
                setLoad(false)
                console.log(err);
            })
            .finally(() => {
                setLoad(false)
            })
    }


    const notify = () => toast.success('Success!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
    return (
        <div className='Zayavka'>
            <div className="container">
                <div className="main-title text-center">
                    <h2>{getText("request")}</h2>
                </div>
                <form onSubmit={sendMessage}>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="form-control">
                                <input onChange={e => setName(e.target.value)} value={name} required name="name" type="text" placeholder={getText("name")} id="name" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control">
                                <InputMask
                                    mask="+\9\9\8\ (99) 999-99-99"
                                    // alwaysShowMask={true}
                                    placeholder={getText("phone")}
                                    maskChar="_"
                                    value={phone_number}
                                    onChange={e => setPhone_number(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button disabled={load} type='submit' className="btn ">
                                {getText("send")} {load ? <span style={{ color: '#fff' }} className='spinner-border-sm spinner-border ms-2'></span> : ''}
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Zayavka