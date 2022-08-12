import React, { useState } from "react";
import { getStatistics } from "../http/http";
import Qrcode from "../qrcode/Qrcode";

const Statistics = () => {
    const [link, setLink] = useState('')
    const [page, setPage] = useState('')
    const [error, SetError] = useState('')
    const [qr, SetQr] = useState('')


    const click = async () => {
        const { data } = await getStatistics(link)
        if (data === 'link not found') {
            SetError('link not found')
        }
        else {
            setPage(data[0])
            SetQr(data[1])
            SetError('')
        }
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Your Link:</label>
                    <input className="form-control"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                    ></input>
                </div>
            </form>
            <button type="submit" className="btn btn-primary" onClick={click}>Get statistics</button>
            <br></br>
            <div>
                {error === '' && page !== ''
                    ?
                    <div>
                        <label>Number of views: {page.number_of_visits}</label>
                        <br></br>
                        <label>Date of creation: {page.datecreate.replace(/[a-zа-яё]/gi, ' ').substr(0, page.datecreate.length - 8)}</label>
                        <br></br>
                        <label>Last viewed date: {page.datelastuse.replace(/[a-zа-яё]/gi, ' ').substr(0, page.datelastuse.length - 8)}</label>
                        <Qrcode props={[qr, link]} />

                    </div>
                    :
                    <div>
                        {error}
                    </div>
                }



            </div>
        </div>
    )
}

export default Statistics



