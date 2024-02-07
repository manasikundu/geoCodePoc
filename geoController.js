const Service = require('./service')
const { ApiKeyManager } = require('@esri/arcgis-rest-request')
const { geocode } = require('@esri/arcgis-rest-geocoding')
const apiKey = "AAPK9e4dae44522b4866b5d8708ac5d8b5bbZhc5tV_7NFDOsxNB8GS_XaBb3o9cdDkDhIrWGZq06nodYNnG0sDRX8pDPuqRV8pd";


exports.getData = async (req, res) => {
    try {
        const authentication = ApiKeyManager.fromKey(apiKey);
        var location = {}
        var result = await geocode({
            address: req.body.address,
            area: req.body.area,
            state: req.body.state,
            country: req.body.country,
            zipcode: req.body.pincode,
            authentication,
        })
        console.log(result.candidates)
        if (result.candidates[0] != undefined) {
            var latitude = result.candidates[0].location.y.toString()
            var longitude = result.candidates[0].location.x.toString()
            location.latitude = latitude
            location.longitude = longitude
        } else {
            location.latitude = '0'
            location.longitude = '0'
        }
        return res.status(200).send({data:location});
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message);
    }
}