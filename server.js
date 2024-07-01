import express from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()



const app = express()
app.use(express.json())


app.post(`/usuarios`, async (req, res)=>{

await prisma.usuario.create({

  data: {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  }
})

  res.status(201).json(req.body)
})

app.put(`/usuarios/:id`, async (req, res)=>{
 
  await prisma.usuario.create({
    where: {
      id: req.params.id
     },

    data: {
      email: req.body.email,
     name: req.body.name,
    password: req.body.password
    }
  })
  
    res.status(201).json(req.body)
  })



app.get(`/usuarios`, async (req, res) =>{
 const usuarios= await prisma.usuario.findMany()


    res.status(200).json(usuarios)

})

app.delete(`/usuarios/:id`, async (req, res) =>{

  await prisma.usuario.delete({
  where: {
    id: req.params.id,

  }
  })
  res.status(200).json({message:` usuario deletado com sucesso`})
})



app.listen(3000)
