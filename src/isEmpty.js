const isEmpty=(value)=>{
    return(
        value===undefined ||
        value ===null ||
        (typeof value === 'map' && Object.keys(value).length===0) ||
        (typeof value ==='string' && value.trim().length===0)
    )
}

export default isEmpty;