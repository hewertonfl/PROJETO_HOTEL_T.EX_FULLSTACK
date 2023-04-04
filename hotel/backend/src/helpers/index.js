
// function formatarData(data) {
//     let d = data.split('T')
//     return d[0]
// }
function formatarData(data) {
    const dataS = new Date(data)
    var formatarData = dataS.toLocaleDateString('pt-BR')
    console.log(formatarData)
    return formatarData
}

module.exports = {formatarData}