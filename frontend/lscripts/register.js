   
    async function lRegister(mail){
        console.log(mail)
        try{
            let response = await fetch("http://localhost:9345/signup",{
                method:"POST",
                body:JSON.stringify(mail),
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            let data = await response.json()
            console.log(data)
        } catch(err){
            console.log(err.message)
        }
    }

export {lRegister}