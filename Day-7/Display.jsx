function Display(datas){
    const {n,a,arr,person}=datas
    return (
        <>                      {/* Fragment Syntax */}
        <h2>Hello {n} {a}</h2>
        <h2>Array Elements</h2>
        <ul>
        {
            arr.map((val)=>{
                return <li>{val}</li>
            })
        }
        </ul>
        <h2>{person.name} {person.age}</h2>
        <h2>Software Developer</h2>
        </>
    )
}
export default Display