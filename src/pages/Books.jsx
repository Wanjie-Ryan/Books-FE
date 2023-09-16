import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Books (){

    const [books, setBooks] = useState([])

    useEffect(()=>{

        const fetchBooks = async ()=>{

            try{

                const response = await axios.get('http://localhost:3003/allbooks')
                // console.log(response)
                setBooks(response.data)


            }
            catch(err){
                console.log(err)
            }


        }

        fetchBooks()


    },[])

    return(
        <>

            <h3>Wanjie Books Shop</h3>

            <div className='books'>
                {books.map((item)=>(
                    <div className='book' key={item.id}>
                        {item.cover && <img src={item.cover} alt='book-image'/>}
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>

                ))}
            </div>
            <button>Add New Book</button>
        
        </>
    )
}

export default Books