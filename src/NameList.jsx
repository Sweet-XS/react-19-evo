export const NameList = () => {
    const names = ["Tzuyu","Jennie","Hyeri","Kiernan","Ning"]
    const nameList = names.map((name) => <h2>{name}</h2>)

    return <div>{nameList}</div>
}