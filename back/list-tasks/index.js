
module.exports = async function (context, req) {
    const { v4: uuidv4 } = require('uuid');


    const task1={id:uuidv4(),text:"Tarea de prueba",dueDate:new Date(),state: "Activo",
                    responsible:{name:"prueba",email:"prueba@mail.com"}}
    const task2={id:uuidv4(),text:"Tarea de prueba 2",dueDate:new Date(),state: "Activo",
                    responsible:{name:"prueba2",email:"prueba2@mail.com"}}
                    
    const tasks=[task1,task2]
    const responseMessage = { tasks: tasks};

    context.res = {
        status: 200,
        body: responseMessage
    };
}