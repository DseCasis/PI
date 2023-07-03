import {useEffect, useState} from "react";
import {BsMenuUp} from"react-icons/bs";
import imageQuestion from "../assets/questionImage.png"
import AccordionItem from "../components/help/AccordionItem";
import {Link} from "react-router-dom";
import {setToken} from "../services/PrivateServices";


export default function Help(){

    const [open, setOpen]=useState(false);

    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])

    const toggle=(index)=>{
        if (open===index){
            return setOpen(null)
        }
        setOpen(index)
    }

    const questions=[{
        question: "que version es mejor para desarrolla",
        response: "v6.4 is our most exciting release yet with new data abstractions for reads, writes, and navigation hooks to easily keep your UI in sync with your data. The new feature overview will catch you up."
    },
        {
            question: "que version es mejor para desarrollar",
            response: "v6.4 is our most exciting release yet with new data abstractions for reads, writes, and navigation hooks to easily keep your UI in sync with your data. The new feature overview will catch you up."
        },
        {
            question: "que version es mejor para desarrollar",
            response: "v6.4 is our most exciting release yet with new data abstractions for reads, writes, and navigation hooks to easily keep your UI in sync with your data. The new feature overview will catch you up."
        }
        ]


    return(
        <div>
            <div className="h-auto absolute">
                <div className="flex w-full h-1/2">
                    <div className="flex w-1/2 justify-center">
                        <div className="w-auto p-16" >
                            <h1 className='text-3xl pb-6 font-semibold font-titan'>
                                Estamos aqui para que
                                tu experiencia sea la
                                mejor
                            </h1>
                            <p className="">
                                si tienes alguna duda sobre nuestros productos o la pagina  revisa la seccion de preguntas frecuentes quiza encuentres una solucion a tus dudas si no es asi escribe al chat de servicio al cliente
                            </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 justify-center">
                        <img className="w-1/2" src={imageQuestion} alt=""/>
                    </div>
                </div>
                <div className='py-16'>
                    <h1 className="text-3xl text-center font-semibold font-titan" >Preguntas frecuentes</h1>
                    <section className="grid place-items-center sm:px-1 lg:px-36">
                        <div>
                            {questions.map((value, index)=>{
                                return(<AccordionItem key={index}
                                                      open={index === open}
                                                      question={value.question}
                                                      response={value.response}
                                                      toggle={()=>toggle(index)}
                                />)
                            })}
                        </div>
                    </section>
                </div>
            </div>
            <div className='fixed w-full'>
                <Link to={'/chats'} >
                    <button className='fixed bottom-0 left-0 bg-green-500 m-4 w-12 h-12 rounded-full'>
                        <BsMenuUp className="m-auto text-white text-lg font-bold" ></BsMenuUp>
                    </button>
                    <div className='fixed bottom-7 left-20 rounded-full'>
                        <div className="text-2xl mt-1 flex items-center pr-4">
                            <span className="text-gray-700 mr-3">Live Chat</span>
                        </div>
                        <span className="absolute text-red-500 left-28 bottom-0">
                           <svg width="20" height="20">
                              <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                           </svg>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
