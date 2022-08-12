import React, { useState } from "react";
import { createlink, qrrr } from "../http/http";
import Qrcode from "../qrcode/Qrcode";
const Page = () => {
    const [link, setLink] = useState('')
    const [page, setPage] = useState('')
    const [qr, setQr] = useState('')

    const click = async () => {
        let { data } = await createlink(link)
        setPage(data[1])
        setQr(data[0])
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
            <button type="submit" className="btn btn-primary" onClick={click}>Сreate link</button>
            <div>
                {page === ''
                    ?
                    ''
                    :
                    <div>
                        Short link:
                        <br></br>
                        <title>Short link:</title>
                        <input className="form-control"
                            value={page}
                            onChange={e => setPage(e.target.value)}
                        ></input>
                        <button onClick={() => navigator.clipboard.writeText(page)}>Copy link</button>
                        <br></br>
                        <Qrcode props={[qr, page]} />
                    </div>
                }</div>
        </div>
    )
}

export default Page



