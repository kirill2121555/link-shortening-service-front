import React, { useState } from "react";
import Qrcode from "../qrcode/Qrcode";
import { createcastomlink } from "./../http/http";

const Castomlink = () => {
    const [link, setLink] = useState('')
    const [textlink, settextlink] = useState('')
    const [castomlink, setCastomlink] = useState('')
    const [qr, setQr] = useState('')
    const click = async () => {
        const { data } = await createcastomlink(link, textlink)
        setCastomlink(data[0])
        setQr(data[1])
    }

    return (<div>
        <form>
            <div className="mb-3">
                <label className="form-label">Your Link:</label>
                <input className="form-control"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                ></input>
                <label className="form-label">Link text:</label>
                <input className="form-control"
                    value={textlink}
                    onChange={e => settextlink(e.target.value)}
                ></input>
            </div>
        </form>
        <button type="submit" className="btn btn-primary" onClick={click}>Create link</button>
        <div>
            {castomlink === ''
                ?
                ''
                    ? castomlink === 'Enter another text'
                    :
                    <div>
                        <input className="form-control"
                            value={castomlink}
                            onChange={e => setCastomlink(e.target.value)}
                        ></input>
                        <button onClick={() => navigator.clipboard.writeText(castomlink)}>Copy link</button>

                    </div>
                :
                <div>
                    <input className="form-control"
                        value={castomlink}
                        onChange={e => setCastomlink(e.target.value)}
                    ></input>
                    <button onClick={() => navigator.clipboard.writeText(castomlink)}>Copy link</button>
                    <Qrcode props={[qr, castomlink]} />
                </div>
            }
        </div>
    </div>
    )
}

export default Castomlink



