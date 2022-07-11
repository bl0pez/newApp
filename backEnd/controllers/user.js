


const profile = (req, res) => {

    console.log(req.veterinary);

    res.json({ 
        message: 'Profile'
     });
}


export {
    profile,
}