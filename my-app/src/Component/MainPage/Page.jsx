import React, { useState } from "react";
import { createlink } from "../http/http";

const Page = () => {
    const [link, setLink] = useState('')
    const [page, setPage] = useState('')

    const click = async () => {
        const { data } = await createlink(link)
        setPage(data)
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
                        <input className="form-control"
                            value={page}
                            onChange={e => setPage(e.target.value)}
                        ></input>
                        <button onClick={() => navigator.clipboard.writeText(page)}>Copy link</button>
                    </div>
                }</div>
        </div>
    )
}

export default Page



