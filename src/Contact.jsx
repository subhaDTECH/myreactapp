import React,{useState} from 'react';

const  Contact=()=> {



    // const [state,setState]=useState({
    //     userName:"",
    //     email:'',
    //     password:'',
    //     textarea:""

    // });

    const [userName,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [textarea,setTextarea]=useState('');
    let onSubmits=(e)=>{
        e.preventDefault();
        alert(e.target.value.userName);
        alert("data sucessfully submit");
        let data=[userName,email,password,textarea];
        alert(data.target);
        

    }
    return (
        <>
        <section className="Contact my-5">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-12 mx-auto my-5">
                    <form method="post" action="" onSubmit={onSubmits}>
                        <div class="form-group">
                            <div class="form-group">
                            <label for="exampleInputPassword1">User Name</label>
                            <input name="userName" value={userName} onChange={(e)=>{setName(e.target.userName)}} type="text" class="form-control" id="exampleInputPassword1" placeholder="UserName"/>
                            </div>

                                <label for="exampleInputEmail1">Email address</label>
                                <input name="email" value={email} onChange={(e)=>setEmail(e.target.email)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input name="password" value={password} onChange={(e)=>setPassword(e.target.password)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea name="textarea" value={textarea} onChange={(e)=>setTextarea(e.target.textarea)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>



                        


                    </div>


                </div>


            </div>



        </section>
        
            
        </>
    )
}

export default Contact;