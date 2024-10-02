const { Email } = require("../entities/email");

const createEmailRepository = async (data) => {

    try {
        return await Email.create(data);
    } catch (error) {
        console.log(error)
    }
       
    
} 


module.exports={
    createEmailRepository
}