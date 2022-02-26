function filterByBrand(brands,data){
    let res = data.filter(el => {
        
        return brands.includes(el.brand);
    })
    // console.log(res);
    return res;
}

function filterBySegment(segments,data){

    let res = data.filter(el => {
        return segments.includes(el.segment);
    })
    return res;
}

function filterByTransmissionType(transmissions,data){
    let res = data.filter(el => transmissions.includes(el.transmission));
    return res;

}

function filterBySeating(seatings,data){
    let res = data.filter(el => seatings.includes(el.seats));
    return res;
}

function filterByFuelType(fuels,data){
    let res = data.filter(el => fuels.includes(el.fuel));
    return res;
}
export {filterByFuelType,filterByBrand,filterBySeating,filterByTransmissionType,filterBySegment};