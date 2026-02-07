export default function ProductCard(props){
    console.log(props);
    
    return(
        <div className="bg-red-500">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800"> Product Card 2</h1>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="evening"/>
            <p>price = 10000LKR</p>
        </div>
    )
}