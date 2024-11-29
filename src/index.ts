import express from 'express';

const app = express();


app.post('/api/v1/signup', (req, res) => {
    const {username, password} = req.body;
    //zod validation
    
});

app.post('/api/v1/signin', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/v1/content', (req,res)=>{
    res.send('content!');
})

app.get('/api/v1/content', (req,res)=>{
    res.send('content!');
})

app.delete('/api/v1/content', (req,res)=>{
    res.send('content!');
})

app.post('/api/v1/brain/share', (req,res)=>{
    res.send('link!');
})

app.get('/api/v1/brain/:link', (req,res)=>{ 
    res.send('link!');
})


app.listen(3000, () => {
  console.log('second brain app listening on port 3000!');
});