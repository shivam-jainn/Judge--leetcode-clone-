import express, { Express, Request, Response } from "express";

const server: Express = express();
const PORT = process.env.PORT as string || 3000;

server.use(express.json());

server.post("/submission", async (req: Request, res: Response) => {
  const { userCode, problemNumber, language, userid } = req.body;

//   const incoming = questions.findOne({ problemNumber: problemNumber });

//   run_container(language, userCode, incoming);

 
});
server.listen(PORT,()=>{
    console.log("PORT is "+PORT); 
});