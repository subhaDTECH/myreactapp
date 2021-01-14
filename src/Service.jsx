import React from 'react';
import Mycard  from "./Mycard";

const  Service=()=> {
    return (
        <>
        <section className="  my-5 ">
            <div className="container my-5">
                 <div className="row">
                 
                   <Mycard
                       
                       imgsrc="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                       title="Learn Coding"
                       btname="start Learning..."
                       text="Relied upon by more than 11 million developers worldwide,
                        npm is committed to making JavaScript development elegant, productive, and safe.
                        The free npm Registry has become "
                   />
                   <Mycard
                   imgsrc="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                   title="python course"
                   btname="start Learning..."
                   text="It is the default package manager for the JavaScript runtime 
                   environment Node.js.
                    It consists of a command line client, also called npm, a"
                       
                   />
                   <Mycard
                        imgsrc="https://images.pexels.com/photos/2083158/pexels-photo-2083158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                       title="Java programing"
                       btname="start java"
                       text="It is the default package manager for the JavaScript runtime 
                                environment Node.js.
                                It consists of a command line client, also called npm, a"
                   />
                   <Mycard
                        imgsrc="https://images.pexels.com/photos/1795518/pexels-photo-1795518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                       title="web development"
                       btname="font end"
                       text="It is the default package manager for the JavaScript runtime 
                                environment Node.js.
                                It consists of a command line client, also called npm, a"
                   />
                   <Mycard title="Back end"
                   imgsrc="https://images.pexels.com/photos/1648474/pexels-photo-1648474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                       btname="start now"
                       text="Relied upon by more than 11 million developers worldwide,
                        npm is committed to making JavaScript development elegant, productive, and safe.
                        The free npm Registry has become "
                   />
                   <Mycard
                   imgsrc="https://images.pexels.com/photos/1742926/pexels-photo-1742926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                       title="full stack"
                       btname="join now"
                       text="It is the default package manager for the JavaScript runtime 
                                environment Node.js.
                                It consists of a command line client, also called npm, "
                   />
                


                 </div>

            </div>


        </section>


        </>
    )
}

export default Service;