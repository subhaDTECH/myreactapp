import React from 'react';

const  About=()=> {
    return (
        <>
        <section className="about_section my-5">
            <div className="container-fluid shadow my-5">
               <div className="row">
                  <div className="col-lg-10  col-md-10  col-11  mx-auto my-5">
                     <div className="row my-5">
                          <div className="col-md-6  ">
                            <img src="https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"className="img-fluid"/>

                          </div>
                          <div className="col-md-6">
                              <h2 className="pt-5">This is the ocan of knowledge</h2>
                                 <p>manager for the JavaScript programming language. 
                                 It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client,
                                  also called npm, and an online database </p>

                          </div>

                     </div>

                  </div>

               </div>

            </div>


        </section>


        </>
    )
}

export default About;