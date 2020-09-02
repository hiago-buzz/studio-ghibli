import React, { useState } from 'react'


export default function Films() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    function addItem() {
        setItems([...items, input])
    }
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <form onSubmit={addItem}>
                <input type="text" onInput={(e) => setInput(e.target.value)} />
                <button>Add</button>
            </form>
        </div >
    )
}
