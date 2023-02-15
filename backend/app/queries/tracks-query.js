const { Track } = require('../../db/models') 

const createTrack = async (payload, auth) => {
    return Track.create({
        user_id: auth,
        lock_latitude: payload.lock_latitude,
        lock_longitude: payload.lock_longitude,
        kecamatan: payload.kecamatan,
        kelurahan: payload.kelurahan,
    })
}

module.exports = {
    createTrack
}