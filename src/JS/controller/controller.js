getDataMovie().then((data) => {
    console.log(data)
    const info = data.Search
    info.forEach(element => { renderInfo(element)})
});