import { useState } from "react";

export default function DisplayCities({selectCity}){
    const cities = ["NewYork", "Tokyo", "London"];
    const cityButtons = cities.map((city) => {
        return <li onClick={() => selectCity(city)}>{city}</li>
    })
    return(
        <>
            <ul>
                {cityButtons}
            </ul>
        </>
    )

}