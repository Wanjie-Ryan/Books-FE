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

            <h3>Hey</h3>
        
        </>
    )
}

export default Books