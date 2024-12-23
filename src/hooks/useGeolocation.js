"use client"

import { useEffect, useState } from 'react'



const useGeoLocation = () => {
    console.log("---------------------")
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: null, lng: null}
    })

    const onSuccess = (position) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    }

    const onError = (error) => {
        setLocation({
            loaded: true,
            coordinates: { lat: null, lng: null },
            error
        })
    }

    useEffect(() => {

        console.log("GeoLocation hook initialized");
        // if browser doesn't support geolocation
        if(!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported',
                PERMISSION_DENIED: 1,
                POSITION_UNAVAILABLE: 2,
                TIMEOUT: 3,
            });
        }

        // if it supports geolocation

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    

    }, [])

    return location
}

export default useGeoLocation
