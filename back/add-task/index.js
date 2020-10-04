
module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    const { v4: uuidv4 } = require('uuid');
    const task = req.body;
    const text=task.text;
    const dueDate=task.dueDate;
    const state=task.state;
    const id= uuidv4();
    const responsible=task.responsible;
    // Implement the response
    const responseMessage = {id:id,text:text,dueDate:dueDate
    ,state:state,responsible:responsible};

    context.res = {
        status: 201,
        body: responseMessage
    };
}