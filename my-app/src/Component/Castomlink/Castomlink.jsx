import React, { useState } from "react";
import { createcastomlink } from "./../http/http";


const Castomlink = () => {

    const [link, setLink] = useState('')
    const [textlink, settextlink] = useState('')
    const [castomlink, setCastomlink] = useState('')

    const click = async () => {
        const { data } = await createcastomlink(link, textlink)
        setCastomlink(data)
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
                :
                <div>
                    <input className="form-control"
                        value={castomlink}
                        onChange={e => setCastomlink(e.target.value)}
                    ></input>
                    <button onClick={() => navigator.clipboard.writeText(castomlink)}>Copy link</button>
                </div>
            }
        </div>
    </div>
    )
}

export default Castomlink



