// returns an array of elements which contains brands inclucded in the brands parameter
function filterByBrand(brands,data){
    let res = data.filter(el => {
        
        return brands.includes(el.brand);
    })
    // console.log(res);
    return res;
}

// returns an array of elements which contains segments inclucded in the segments parameter
function filterBySegment(segments,data){

    let res = data.filter(el => {
        return segments.includes(el.segment);
    })
    return res;
}

// returns an array of elements which contains the transmission types inclucded in the transmissions parameter
function filterByTransmissionType(transmissions,data){
    let res = data.filter(el => transmissions.includes(el.transmission));
    return res;

}
// returns an array of elements which contains the seating capacities inclucded in the seatings parameter
function filterBySeating(seatings,data){
    let res = data.filter(el => seatings.includes(el.seats));
    return res;
}
// returns an array of elements which contains fuel types inclucded in the fuels parameter
function filterByFuelType(fuels,data){
    let res = data.filter(el => fuels.includes(el.fuel));
    return res;
}

export {filterByFuelType,filterByBrand,filterBySeating,filterByTransmissionType,filterBySegment};