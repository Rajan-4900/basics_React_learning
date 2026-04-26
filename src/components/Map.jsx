import React from 'react'

const Map = () => {
    // const data = ["Google", "Microsoft", "Apple", "Amazon"]
    const smartPhone = [
        { id: 1, model: "Iphone 17 pro", img : "https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg", },
        { id: 2, model: "Iphone 16 pro", img : "https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg", },
        { id: 3, model: "Iphone 15 pro", img : "https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg", }
    ];
    return (
        <>
        <div>
        {smartPhone.map((data) => (
            <div key={data.id}>
                <img style={{ width: "150px" }} src={data.img} alt="" />
                <h3>{data.model}</h3>
            </div>
        ))}
        </div>
            {/* {data.map((element, index) => (
                <div key={index}>
                    <h1>{element}</h1>
                </div>
            ))} */}

        </>
    )
}

export default Map;
